/**
 * title: 多级管理员用户
 */
import React, { Component } from 'react';
import {connect} from 'dva';
import {Button, message} from 'antd';
import {PERMISSION_MULTISTAGE as namespace} from 'utils/namespace';
import {getUserInfo} from 'utils/storage';
import AddAdminModal from './components/AddAdminModal';
import EditAdminModal from './components/EditAdminModal';
import BaseTable from 'components/BaseTable';
import withTable from 'components/withTable';
import {tableConfig} from './components/config';
import style from './style.less';

class Multistage extends Component {
  // 显示新增管理员弹框
  handleShowAddModal = () => {
    this.props.dispatch({
      type: `${namespace}/updateState`,
      payload: {
        showAddModal: true
      }
    })
  }
  // 隐藏新增管理员弹框
  handleHideAddModal = () => {
    this.props.dispatch({
      type: `${namespace}/updateState`,
      payload: {
        showAddModal: false
      }
    })
  }
  // 提交管理员信息
  handleSubmitAddAdmin = (values, resetFields) => {
    this.props.dispatch({
      type: `${namespace}/addAdmin`,
      payload: values
    }).then(() => {
      resetFields();
      this.handleHideAddModal();
    })
  }
  // 显示修改管理员弹框
  handleShowEditModal = record => {
    this.props.dispatch({
      type: `${namespace}/updateState`,
      payload: {
        showEditModal: true,
        currentRecord: record
      }
    })
  }
  // 提交修改的管理员信息
  handleSubmitEditAdmin = (values, resetFields) => {
    const {dispatch, currentRecord} = this.props;
    dispatch({
      type: `${namespace}/editAdmin`,
      payload: {
        ...values,
        adminId: currentRecord.id
      }
    }).then(() => {
      resetFields();
      this.handleHideEditModal();
    })
  }
  // 隐藏修改管理员弹窗
  handleHideEditModal = () => {
    this.props.dispatch({
      type: `${namespace}/updateState`,
      payload: {
        showEditModal: false
      }
    })
  }
  // 删除管理员
  handleDelete = record => {
    // 判断是否为当前用户
    let userId = (getUserInfo() || {}).id;
    if(userId == record.id) {
      message.error('不能删除自己');
      return;
    }
    // 判断是否为管理员
    if(record['menu_list'].includes('all')) {
      message.error('不能删除超级管理员');
      return;
    }
    this.props.dispatch({
      type: `${namespace}/deleteAdmin`,
      payload: {adminId: record.id}
    });
  }
  render() {
    const {tableData, showAddModal, showEditModal, currentRecord, onPageChange} = this.props;
    let tableProps = {
      columns: tableConfig(this.handleShowEditModal, this.handleDelete),
      tableData,
      onPageChange
    }
    let addModalProps = {
      visible: showAddModal,
      handleSubmit: this.handleSubmitAddAdmin,
      handleCancel: this.handleHideAddModal
    }
    let editModalProps = {
      visible: showEditModal,
      currentRecord,
      handleSubmit: this.handleSubmitEditAdmin,
      handleCancel: this.handleHideEditModal
    }
    return (
      <div>
        <div className={style['add-admin']}>
          <Button type='primary' onClick={this.handleShowAddModal}>添加管理员</Button>
        </div>
        <BaseTable {...tableProps} />
        {showAddModal && <AddAdminModal {...addModalProps} />}
        {showEditModal && <EditAdminModal {...editModalProps} />}
      </div>
    )
  }
}
const WrappedComponent = withTable(Multistage, namespace)
export default connect(store => store[namespace])(WrappedComponent);