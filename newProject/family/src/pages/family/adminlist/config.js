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
    title: '家族姓氏',
    dataIndex: 'familySurname'
  },
  {
    title: '创建时间',
    dataIndex: 'create_time'
  },
  {
    title: '管理员的用户id',
    dataIndex: 'adminId'
  },
  {
    title: '管理员的用户名',
    dataIndex: 'username'
  },
  {
    title: '管理员手机',
    dataIndex: 'phone'
  },
  {
    title: '头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} alt=''/>
  },
  {
    title: '是否是创始人',
    dataIndex: 'is_originator',
    render(text) {
      let newText = text;
      if(text == 0) {
        newText = '否';
      }else if(text == 1) {
        newText = '是';
      }
      return newText;
    }
  }
];