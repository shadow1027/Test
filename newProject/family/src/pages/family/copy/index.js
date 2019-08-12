/**
 * title: 家族分支复制记录
 */
import React from 'react'
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {FAMILY_COPY_LIST as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function NewList({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(NewList, namespace)
export default connect(store => store[namespace])(WrappedComponent);