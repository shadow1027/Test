import React from 'react';
import {Modal, Input, Form, Button} from 'antd';
import {phoneValidate} from 'utils/validate';

const FormItem = Form.Item;
const formItemCol = {
  labelCol: {span: 4},
  wrapperCol: {span: 8}
}

function EditAdminModel({
  form,
  currentRecord,
  handleSubmit, 
  handleCancel, 
  ...props
}) {
  const onOk = () => {
    form.validateFields((err, values) => {
      if(!err) {
        handleSubmit && handleSubmit(values, form.resetFields);
      }
    })
  }
  const {getFieldDecorator} = form;
  let modalProps = {
    title: '修改管理员',
    width: 600,
    maskClosable: false,
    ...props,
    onOk,
    onCancel: handleCancel
  }
  return (
    <Modal {...modalProps}>
      <FormItem label='用户名' {...formItemCol}>
        <Input disabled={true} value={currentRecord.username} />
      </FormItem>
      <FormItem label='Email地址' {...formItemCol}>
        {
          getFieldDecorator('email', {
            initialValue: currentRecord.email,
            rules: [{type: 'email', message: '请输入正确邮箱地址'}]
          })(<Input />)
        }
      </FormItem>
      <FormItem label='手机号' {...formItemCol}>
        {
          getFieldDecorator('phone', {
            initialValue: currentRecord.phone,
            rules: [{pattern: phoneValidate, message: '请输入正确的手机号'}]
          })(<Input />)
        }
      </FormItem>
      <FormItem label='新密码' {...formItemCol}>
        {
          getFieldDecorator('newPassword', {
            initialValue: '',
          })(<Input type='password' />)
        }
      </FormItem>
    </Modal>
  )
}

export default Form.create()(EditAdminModel);
