export const columnConfig = [
  {
    title: '过继人物id',
    dataIndex: 'same_personId'
  },
  {
    title: '家族id',
    dataIndex: 'familyId'
  },
  {
    title: '家族名',
    dataIndex: 'family_name'
  },
  {
    title: '绑定用户id',
    dataIndex: 'userId',
    render(text) {
      if(text == 0) {
        return '未绑定';
      }
      return text;
    }
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '类型',
    dataIndex: 'type',
    render(text) {
      let newText = text;
      if(text == 1) {
        newText = '本家';
      }else if(text == 2) {
        newText = '配偶';
      }
      return newText;
    }
  },
  {
    title: '是否删除',
    dataIndex: 'is_delete',
    render: text => text == 0 ? '否' : '是'
  },
  {
    title: '人物姓名',
    dataIndex: 'name'
  },
  {
    title: '性别',
    dataIndex: 'gender',
    render(text) {
      let newText = text;
      if(text == 0) {
        newText = '女';
      }else if(text == 1) {
        newText = '男';
      }
      return newText;
    }
  },
  {
    title: '头像',
    dataIndex: 'photo',
    render: text => <img width={40} src={text} alt=''/>
  },
  {
    title: '是否死亡',
    dataIndex: 'is_dead',
    render: text => text == 0 ? '否' : '是'
  },
  {
    title: '是否过继',
    dataIndex: 'is_adoption',
    render: text => text == 0 ? '否' : '是'
  },
  {
    title: '死亡时间',
    dataIndex: 'dead_time'
  }
];