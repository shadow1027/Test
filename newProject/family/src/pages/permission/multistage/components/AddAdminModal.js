import React from 'react';
import {Modal, Input, Form} from 'antd';
import {phoneValidate} from 'utils/validate';

const FormItem = Form.Item;
const formItemCol = {
  labelCol: {span: 4},
  wrapperCol: {span: 8}
}

function AddAdminModal({form, handleSubmit, handleCancel, ...props}) {
  const onOk = () => {
    form.validateFields((err, values) => {
      console.log(err)
      if(!err) {
        handleSubmit && handleSubmit(values, form.resetFields);
      }
    })
  }
  const {getFieldDecorator} = form;
  let modalProps = {
    title: '添加管理员',
    width: 600,
    maskClosable: false,
    ...props,
    onOk,
    onCancel: handleCancel
  }
  return (
    <Modal {...modalProps}>
      <FormItem label='用户名' {...formItemCol}>
        {
          getFieldDecorator('name', {
            rules: [{required: true, message: '必填'}]
          })(<Input />)
        }
      </FormItem>
      <FormItem label='Email地址' {...formItemCol}>
        {
          getFieldDecorator('email', {
            rules: [{type: 'email', message: '请输入正确邮箱地址'}]
          })(<Input />)
        }
      </FormItem>
      <FormItem label='手机号' {...formItemCol}>
        {
          getFieldDecorator('phone', {
            rules: [{pattern: phoneValidate, message: '请输入正确的手机号'}]
          })(<Input />)
        }
      </FormItem>
      <FormItem label='密码' {...formItemCol}>
        {
          getFieldDecorator('password', {
            rules: [{required: true, message: '必填'}]
          })(<Input type='password' />)
        }
      </FormItem>
    </Modal>
  )
}

export default Form.create()(AddAdminModal);
