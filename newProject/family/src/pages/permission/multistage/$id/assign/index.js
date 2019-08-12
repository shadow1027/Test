import React from 'react';
import {connect} from 'dva';
import router from 'umi/router';
import {Form, Checkbox, Button, message} from 'antd';
import {PERMISSION_ASSIGN as namespace} from 'utils/namespace';
import {optionConfig} from './config';

const CheckboxGroup = Checkbox.Group;

function Assign({form, dispatch, location, match}) {
  const {state={}} = location;
  let checked = [];
  if(state.record) {
    checked = state.record['menu_list'];
  }
  const handleSubmit = e => {
    e.preventDefault();
    let menuList = form.getFieldValue('checkbox');
    dispatch({
      type: `${namespace}/assignPermission`,
      payload: {
        adminId: match.params.id,
        menuList
      }
    }).then(() => {
      message.success('分配管理员权限成功');
      router.push('/permission/multistage');
    });
  }
  const btnStyle = {
    display: 'block',
    width: '120px',
    marginTop: '20px'
  }
  const {getFieldDecorator} = form;
  return (
    <Form onSubmit={handleSubmit}>
      {
        getFieldDecorator('checkbox', {
          initialValue: checked,
        })(
          <CheckboxGroup options={optionConfig} />
        )
      }
      <Button style={btnStyle} type='primary' htmlType='submit'>提交</Button>
    </Form>
  )
}

export default connect(store => store[namespace])(Form.create()(Assign));
