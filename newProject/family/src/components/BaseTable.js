import React from 'react';
import {Table} from 'antd';
import style from './style.less';

function BaseTable({columns, tableData, rowKey='id', onPageChange, ...res}) {
  const {total, pageIndex, pageSize, paging:dataSource=[]} = tableData;
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>上一页</a>;
    }
    if (type === 'next') {
      return <a>下一页</a>;
    }
    return originalElement;
  }
  const tableProps = {
    className: res.onRow ? style['table-row'] : undefined,
    columns,
    dataSource,
    rowKey,
    pagination: {
      total: total - 0,
      page: pageIndex - 0,
      pageSize: pageSize - 0,
      hideOnSinglePage: true,
      showQuickJumper: true,
      showSizeChanger: true,
      itemRender: itemRender,
      onShowSizeChange: onPageChange,
      onChange: onPageChange
    },
    ...res
  }
  return <Table {...tableProps} />
}

export default BaseTable;