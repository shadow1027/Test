/**
 * title: 家族新鲜事
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {LOG_NEWS as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function Comment({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(Comment, namespace)
export default connect(store => store[namespace])(WrappedComponent);