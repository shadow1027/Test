import React, { Component } from 'react';
import {connect} from 'dva';
import {Form, Input, Button, Icon, Alert} from 'antd';
import {LOGIN as namespace} from 'utils/namespace';
import {getSession} from 'utils/storage';
import style from './style.less';

const FormItem = Form.Item;
const iconStyle = {color: 'rgba(0,0,0,.25)'};

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch, form:{validateFields}} = this.props;
    validateFields((err, values) => {
      if(!err) {
        dispatch({
          type: `${namespace}/login`,
          payload: {
            ...values,
            captcha_session: this.props.loginCount > 3 ? getSession() : undefined
          }
        }).then(() => {
          const {loginCount} = this.props;
          // 当第4次登录失败后，需要调用getCode方法来显示验证码
          if(loginCount === 4) {
            this.getCode();
          }else if(loginCount > 5) {
            // 登录超过5次，账户锁定，并开始倒计时
            this.timer = setInterval(() => {
              const {timeRemaining} = this.props;
              if(timeRemaining <= 1) {
                // 到指定时间后清除定时器，重新设置登录次数(loginCount)和剩余时间(timeRemaining)
                clearInterval(this.timer);
                this.timer = null;
                dispatch({
                  type: `${namespace}/updateState`,
                  payload: {
                    loginCount: 0,
                    timeRemaining: 10 * 60
                  }
                });
              }else {
                dispatch({
                  type: `${namespace}/updateState`,
                  payload: {
                    timeRemaining: timeRemaining - 1
                  }
                });
              }
            }, 1000);
          }
        });
      }
    });
  }
  getCode = () => {
    this.props.dispatch({
      type: `${namespace}/getCode`
    }).then(blob => {
      // 根据blob对象创建url
      this.img.src = window.URL.createObjectURL(blob);
      // 元素的onload 事件触发后将销毁URL对象, 释放内存。
      this.img.onload = () => {
        window.URL.revokeObjectURL(this.img.src);
      }
    });
  }
  render() {
    const {form:{getFieldDecorator}, loginCount, timeRemaining} = this.props;
    return (
      <div className={style['login-container']}>
        <div className={style['form-wrapper']}>
          <h2 className={style['login-title']}>用户登录</h2>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {
                getFieldDecorator('loginName', {
                  rules: [
                    {required: true, message: '必填'},
                  ]
                })(<Input placeholder='用户名' prefix={<Icon type="user" style={iconStyle}/>}/>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [
                    {required: true, message: '必填'},
                  ]
                })(<Input placeholder='密码' type='password' prefix={<Icon type="lock" style={iconStyle}/>}/>)
              }
            </FormItem>
            {
              // 登录超过3次，显示验证码
              loginCount > 3 && (
                <>
                  <FormItem>
                    {
                      getFieldDecorator('captcha', {
                        rules: [
                          {required: true, message: '必填'}
                        ]
                      })(<Input className={style['input-code']} placeholder='验证码' prefix={<Icon type='mail' style={iconStyle}/>}/>)
                    }
                    <Button className={style['get-code']} onClick={this.getCode}>
                      换一张
                    </Button>
                  </FormItem>
                  <img className={style['img-code']} ref={img => this.img = img} alt='' />
                </>
              )
            }
            <Button className={style['sumbit-btn']} type='primary' htmlType='submit' disabled={loginCount > 5}>
              登录 {loginCount > 5 && `(剩余 ${timeRemaining} s)`}
            </Button>
            {/* 登录超过5次，显示警告信息 */}
            {loginCount > 5 && <Alert message="登录超过5次，账号锁定10分钟" type="error" showIcon />}
          </Form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state[namespace];
}
export default connect(mapStateToProps)(Form.create()(Login));