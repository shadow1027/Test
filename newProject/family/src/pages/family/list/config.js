export const columnConfig = [
  {
    title: '家族名',
    dataIndex: 'name'
  },
  {
    title: '家族姓氏',
    dataIndex: 'surname'
  },
  {
    title: '家族最小辈分',
    dataIndex: 'min_level'
  },
  {
    title: '家族最大辈分',
    dataIndex: 'max_level'
  },
  {
    title: '创始人id',
    dataIndex: 'originator'
  },
  {
    title: '创始人姓名',
    dataIndex: 'username'
  },
  {
    title: '家族总人数',
    dataIndex: 'member_count'
  },
  {
    title: '头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} alt=''/>
  },
  {
    title: '家族创建时间',
    dataIndex: 'create_time'
  },
  {
    title: '家族更新时间',
    dataIndex: 'update_time'
  }
];