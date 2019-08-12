/**
 * title: 人物日志
 */
import React from 'react'
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {FIGURE_LOG as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function Log({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(Log, namespace)
export default connect(store => store[namespace])(WrappedComponent);