/**
 * title: 活动日志
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {LOG_ACTIVE as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function Active({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(Active, namespace)
export default connect(store => store[namespace])(WrappedComponent);