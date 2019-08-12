
export const columnConfig = [
  {
    title: '活动所在家族id',
    dataIndex: 'familyId'
  },
  {
    title: '创建用户ID',
    dataIndex: 'createBy'
  },
  {
    title: '活动标题',
    dataIndex: 'title'
  },
  {
    title: '活动头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} alt='/' />
  },
  {
    title: '开始时间',
    dataIndex: 'startTime'
  },
  {
    title: '结束时间',
    dataIndex: 'endTime'
  },
  {
    title: '申请加入活动截止日期',
    dataIndex: 'deadline'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime'
  },
  {
    title: '参加活动用户列表',
    dataIndex: 'joinUsers',
    render(text){
      return (
          <button>查看详情</button>
      )
    }
  }
];