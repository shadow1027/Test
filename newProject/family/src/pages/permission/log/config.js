export const columnConfig = [
  {
    title: '登陆名',
    dataIndex: 'login_name'
  },
  {
    title: '管理员id',
    dataIndex: 'adminId'
  },
  {
    title: 'ip',
    dataIndex: 'login_ip'
  },
  {
    title: '登陆时间',
    dataIndex: 'login_time'
  },
  {
    title: '登陆状态',
    dataIndex: 'success',
    render(text) {
      return text == 1 ? '成功' : '失败'
    }
  }
];