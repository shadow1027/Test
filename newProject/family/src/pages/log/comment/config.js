export const columnConfig = [
  {
    title: '推文id',
    dataIndex: 'postId'
  },
  {
    title: '类型',
    dataIndex: 'module'
  },
  {
    title: '创建用户id',
    dataIndex: 'userId'
  },
  {
    title: '评论数',
    dataIndex: 'replyto'
  },
  {
    title: '回复的上一条评论用户id',
    dataIndex: 'replytoUserId'
  },
  {
    title: '回复的评论用户名',
    dataIndex: 'replytoUsername'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '创建用户名',
    dataIndex: 'createByName'
  },
  {
    title: '头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} alt='/' />
  },
];