/**
 * title: pdf导出日志
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {LOG_EXPORT as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function Export({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  // console.log(tableData)
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(Export, namespace)
export default connect(store => store[namespace])(WrappedComponent);