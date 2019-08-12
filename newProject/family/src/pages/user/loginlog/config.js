export const columnConfig = [
  {
    title: '登陆用户名',
    dataIndex: 'login_name'
  },
  {
    title: '设备标识',
    dataIndex: 'device'
  },
  {
    title: '用户id',
    dataIndex: 'userId'
  },
  {
    title: '登陆ip',
    dataIndex: 'login_ip'
  },
  {
    title: '登陆时间',
    dataIndex: 'login_time'
  },
  {
    title: '是否成功',
    dataIndex: 'success',
    render: text => text == 0 ? '失败' : '成功' //  1 成功 0 失败
  }
];