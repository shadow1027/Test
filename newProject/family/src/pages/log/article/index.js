/**
 * title: 个人空间推文
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {LOG_ARTICLE as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function Article({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(Article, namespace)
export default connect(store => store[namespace])(WrappedComponent);