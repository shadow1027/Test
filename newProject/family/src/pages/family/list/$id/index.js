/**
 * title: 家族新鲜事
 */
import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {FAMILY_NEWS as namespace} from 'utils/namespace';
import {columnConfig} from './config';

function OptionLog({dispatch, tableData, match}) {
  const onPageChange = (page, pageSize) => {
    dispatch({
      type: `${namespace}/getTableData`,
      payload: {
        pageIndex: page, 
        pageSize, 
        familyId: match.params.id
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

export default connect(store => store[namespace])(OptionLog);
