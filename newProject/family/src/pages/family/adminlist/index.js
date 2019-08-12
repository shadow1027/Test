/**
 * title: 家族管理员/创始人列表
 */
import React from 'react'
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {FAMILY_ADMIN_LIST as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function AdminList({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(AdminList, namespace)
export default connect(store => store[namespace])(WrappedComponent);