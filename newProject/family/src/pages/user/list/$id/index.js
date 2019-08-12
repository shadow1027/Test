/**
 * title: 用户新鲜事
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {USER_NEWS as namespace} from 'utils/namespace';
import {columnConfig} from './config';

function News({dispatch, tableData, match}) {
  const onPageChange = (page, pageSize) => {
    dispatch({
      type: `${namespace}/getTableData`,
      payload: {
        pageIndex: page, 
        pageSize, 
        userId: match.params.id
      }
    });
  }
  const tableProps = {
    columns: columnConfig,
    tableData,
    onPageChange
  }
  return <BaseTable {...tableProps} />
}

export default connect(store => store[namespace])(News);
