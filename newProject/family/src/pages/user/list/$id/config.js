export const columnConfig = [
  {
    title: '家族id',
    dataIndex: 'familyId'
  },
  {
    title: '家族名',
    dataIndex: 'familyName'
  },
  {
    title: '模块id',
    dataIndex: 'module'
  },
  {
    title: '操作用户id',
    dataIndex: 'operatorId'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '用户昵称',
    dataIndex: 'nickname'
  },
  {
    title: '头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} alt='' />
  },
  {
    title: '被操作的人物id',
    dataIndex: 'thingId'
  },
  {
    title: '被操作的人物姓名',
    dataIndex: 'thingName'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime'
  }
]