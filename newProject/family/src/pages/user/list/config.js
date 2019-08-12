export const columnConfig = [
  {
    title: '用户id',
    dataIndex: 'id'
  },
  {
    title: '用户类型',
    dataIndex: 'user_type'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '昵称',
    dataIndex: 'nickname'
  },
  {
    title: '手机',
    dataIndex: 'phone'
  },
  {
    title: '邮箱',
    dataIndex: 'email'
  },
  {
    title: '头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} />
  },
  {
    title: '性别',
    dataIndex: 'gender',
    render(text) {
      let gender = text;
      if(text == 0) {
        gender = '女';
      }else if(text == 1) {
        gender = '男';
      }else if(text == 2) {
        gender = '未知'
      }
      return gender;
    }
  },
  {
    title: '生日',
    dataIndex: 'birthday'
  },
  {
    title: '创建时间',
    dataIndex: 'create_time'
  },
  {
    title: '更新时间',
    dataIndex: 'update_time'
  }
];