/**
 * title: 用户列表
 */
import React from 'react';
import {connect} from 'dva';
import router from 'umi/router';
import BaseTable from 'components/BaseTable';
import {USER_LIST as namespace} from 'utils/namespace';
import withTable from 'components/withTable';
import {columnConfig} from './config';

function List({tableData, onPageChange}) {
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange,
    onRow: record => ({
      onClick() {
        router.push(`/user/list/${record.id}`)
      }
    })
  }
  return <BaseTable {...tableProps} />
}
const WrappedComponent = withTable(List, namespace)
export default connect(store => store[namespace])(WrappedComponent);