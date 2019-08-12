/**
 * title: 家族分支删除还原记录
 */
import React from 'react'
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {FAMILY_DELETE_LIST as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function DeleteList({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(DeleteList, namespace)
export default connect(store => store[namespace])(WrappedComponent);