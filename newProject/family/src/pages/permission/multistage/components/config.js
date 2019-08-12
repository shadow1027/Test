import React from 'react';
import {Icon, Popconfirm} from 'antd';
import Link from 'umi/link';
import style from '../style.less';

export const tableConfig = (handleShowEditModal, handleDelete) => [
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: 'Email地址',
    dataIndex: 'email'
  },
  {
    title: '加入时间',
    dataIndex: 'add_time'
  },
  {
    title: '最后登录时间',
    dataIndex: 'last_login'
  },
  {
    title: '操作',
    dataIndex: 'options',
    render(text, record) {
      let toAssign = {
        pathname: `/permission/multistage/${record.id}/assign`,
        state: {record}
      }
      return (
        <div className={style['table-cell-options']}>
          <Link to={toAssign}>
            <Icon type="setting" />
          </Link>
          <Link to={`/permission/multistage/${record.id}/optionlog`}>
            <Icon type="search" />
          </Link>
          <Icon type="edit" onClick={() => {handleShowEditModal(record)}} />
          <Popconfirm
            title="您确认要删除这条记录吗？"
            onConfirm={() => {handleDelete(record)}}
          >
            <Icon type="delete" />
          </Popconfirm>
        </div>
      )
    }
  }
]