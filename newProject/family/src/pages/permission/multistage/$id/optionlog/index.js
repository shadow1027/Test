import React from 'react';
import {connect} from 'dva';
import BaseTable from 'components/BaseTable';
import {PERMISSION_OPTION_LOG as namespace} from 'utils/namespace';
import {columnConfig} from './config';

function OptionLog({dispatch, tableData, match}) {
  const onPageChange = (page, pageSize) => {
    dispatch({
      type: `${namespace}/getTableData`,
      payload: {
        pageIndex: page, 
        pageSize, 
        adminId: match.params.id
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
