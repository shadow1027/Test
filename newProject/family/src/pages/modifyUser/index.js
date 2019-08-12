import React, { Component } from 'react';
import {Form, Input, Button, Alert} from 'antd';
import {connect} from 'dva';
import {MODIFY_USER as namespace} from 'utils/namespace';
import {phoneValidate} from 'utils/validate';
import style from './style.less';

const FormItem = Form.Item;
const formItemCol = {
  labelCol: {span: 8},
  wrapperCol: {span: 12}
}

class ModifyUser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {form:{validateFields}, dispatch} = this.props;
    validateFields((err, values) => {
      if(!err) {
        let {oldPassword, newPassword, confirmPassword, ...res} = values;
        let payload = {...res};
        // 如果有旧密码，判断新密码和确认密码是否一致，并将旧密码和新密码传给后端；否则不传
        if(oldPassword) {
          if(newPassword !== confirmPassword) {
            dispatch({
              type: `${namespace}/updateState`,
              payload: {show: true}
            });
            return ;
          }
          payload = {
            ...payload,
            oldPassword,
            newPassword
          }
        }
        dispatch({
          type: `${namespace}/updateUserInfo`,
          payload
        });
      }
    })
  }
  validator = (a, value, callback) => {
    const {form:{getFieldValue}} = this.props;
    // 判断 旧密码 字段是否有值
    if(getFieldValue('oldPassword') && !value) {
      callback('必填');
    }
    callback();
  }
  render() {
    const {form:{getFieldDecorator}, userInfo, show} = this.props;
    return (
      <div className={style['modify-user-wrapper']}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label='用户名' {...formItemCol}>
            <Input disabled={true} value={userInfo.username} />
          </FormItem>
          <FormItem label='Email地址' {...formItemCol}>
            {
              getFieldDecorator('email', {
                initialValue: userInfo.email,
                rules: [{type: 'email', message: '请输入正确邮箱地址'}]
              })(<Input />)
            }
          </FormItem>
          <FormItem label='手机号' {...formItemCol}>
            {
              getFieldDecorator('phone', {
                initialValue: userInfo.phone,
                rules: [{pattern: phoneValidate, message: '请输入正确的手机号'}]
              })(<Input />)
            }
          </FormItem>
          <FormItem label='旧密码' {...formItemCol}>
            {
              getFieldDecorator('oldPassword', {
              })(<Input type='password' />)
            }
            <div className={style['password-info']}>如果要修改密码，请先填写旧密码，如留空，则密码保持不变</div>
          </FormItem>
          <FormItem label='新密码' {...formItemCol}>
            {
              getFieldDecorator('newPassword', {
                rules: [{validator: this.validator}]
              })(<Input type='password' />)
            }
          </FormItem>
          <FormItem label='确认密码' {...formItemCol}>
            {
              getFieldDecorator('confirmPassword', {
                rules: [{validator: this.validator}]
              })(<Input type='password' />)
            }
            {show && <Alert type='error' message='两次输入密码不一致' />}
          </FormItem>
          <FormItem>
            <Button className='ant-col-12 ant-col-offset-8' type='primary' htmlType='submit'>提交</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default connect(store => store[namespace])(Form.create()(ModifyUser));