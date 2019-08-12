export const columnConfig = [
  {
    title: '用户id',
    dataIndex: 'userId'
  },
  {
    title: '作者',
    dataIndex: 'author'
  },
  {
    title: '作者头像',
    dataIndex: 'authorPhoto',
    render: text => <img width={40} src={text} alt='/' />
  },
  {
    title: '推文内容',
    dataIndex: 'content'
  },
  {
    title: '评论数',
    dataIndex: 'commentCount'
  },
  {
    title: '喜欢数',
    dataIndex: 'likeCount'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime'
  }
];