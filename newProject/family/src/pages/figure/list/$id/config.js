export const figureKeys = [
  {
    text: '人物姓名',
    key: 'name'
  },
  {
    text: '人物类型',
    key: 'type',
    render(text) {
      let newText = text;
      if(text == 1) {
        newText = '主系';
      }else if(text == 2) {
        newText = '配偶';
      }
      return newText;
    }
  },
  {
    text: '人物辈分',
    key: 'level'
  },
  {
    text: '地址',
    key: 'address'
  },
  {
    text: '生日',
    key: 'birthday'
  },
  {
    text: '性别',
    key: 'gender',
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
    text: '头像',
    key: 'photo',
    render: text => <img width={40} src={text} alt='' />
  },
  {
    text: '手机',
    key: 'phone'
  },
  {
    text: '血型',
    key: 'bloodType'
  },
  {
    text: '分享Url',
    key: 'shareUrl'
  },
  {
    text: '家族id',
    key: 'familyId'
  },
  {
    text: '家族姓名',
    key: 'familyName'
  },
  {
    text: '家族头像',
    key: 'familyPhoto',
    render: text => <img width={40} src={text} alt='' />
  },
  {
    text: '绑定用户的id',
    key: 'userId',
    render(text) {
      if(text == 0) {
        return '未绑定';
      }
      return text;
    }
  },
  {
    text: '父亲',
    key: 'fatherName',
  },
  {
    text: '母亲',
    key: 'motherName',
  },
  {
    text: '兄弟',
    key: 'brotherName',
  },
  {
    text: '姐妹',
    key: 'sisterName',
  },
  {
    text: '人物详细介绍',
    key: 'profileText'
  },
  {
    text: '侧边栏文本',
    key: 'sideText'
  },
  {
    text: '国家',
    key: 'countryName'
  },
  {
    text: '城市',
    key: 'cityName'
  },
  {
    text: '省份',
    key: 'provinceName'
  },
  {
    text: '地区',
    key: 'areaName'
  },
  {
    text: '乡镇',
    key: 'townName'
  },
  {
    text: '创建用户id',
    key: 'createBy'
  },
  {
    text: '创建时间',
    key: 'createTime'
  },
  {
    text: '更新用户id',
    key: 'updateBy'
  },
  {
    text: '更新时间',
    key: 'updateTime'
  },
  {
    text: '字',
    key: 'zi'
  },
  {
    text: '是否死亡',
    key: 'isDead',
    render: text => text == 0 ? '未死亡': '已死亡'
  },
  {
    text: '是否过继',
    key: 'isAdoption',
    render: text => text == 0 ? '否' : '是'
  },
  {
    text: '死亡事件',
    key: 'deadTime'
  },
  {
    text: '过继的人物id',
    key: 'samePersonId'
  },
  {
    text: '家庭中兄弟排行',
    key: 'ranking'
  },
  {
    text: '是否删除',
    key: 'isDelete'
  },
  {
    text: '儿子',
    key: 'sonName'
  },
  {
    text: '女儿',
    key: 'daughterName'
  },
  {
    text: '配偶',
    key: 'spouseName'
  }
];