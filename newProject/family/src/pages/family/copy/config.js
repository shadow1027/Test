export const columnConfig = [
  {
    title: '复制的家族id',
    dataIndex: 'oldFamilyId'
  },
  {
    title: '复制家族名',
    dataIndex: 'oldFamilyName'
  },
  {
    title: '复制起点人物id',
    dataIndex: 'copyedPersonId'
  },
  {
    title: '复制人物名',
    dataIndex: 'copyedPersonName'
  },
  {
    title: '复制到的新家族id',
    dataIndex: 'newFamilyId'
  },
  {
    title: '复制到的家族名',
    dataIndex: 'NewFamilyName'
  },
  {
    title: '复制到的人物新起点',
    dataIndex: 'newParentId'
  },
  {
    title: '新起点名',
    dataIndex: 'newParentName'
  },
  {
    title: '是否复制绑定人物关系',
    dataIndex: 'isSetUserId',
    render(text) {
      let newText = text;
      if(text == 0) {
        newText = '否';
      }else if(text == 1) {
        newText = '是';
      }
      return newText;
    }
  },
  {
    title: '操作人',
    dataIndex: 'option_user'
  },
  {
    title: '操作人姓名',
    dataIndex: 'optionName'
  },
  {
    title: '操作时间',
    dataIndex: 'record_time'
  }
];