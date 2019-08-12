import style from './style.less';

export const columnConfig = [
  {
    title: '本次操作起始点人物id',
    dataIndex: 'personId'
  },
  {
    title: '起始点人物名',
    dataIndex: 'person_name'
  },
  {
    title: '人物头像',
    dataIndex: 'person_photo',
    render: text => <img width={40} src={text} alt=''/>
  },
  {
    title: '本次操作影响到的人物id集合',
    dataIndex: 'persons',
    render(text, record) {
      let persons = record.persons;
      return persons.map(person => {
        return (
          <li key={person.id} className={style['person-wrapper']}>
            <img width={40} src={person.photo} alt='' />
            <span>{person.name}</span>
          </li>
        )
      })
    }
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
    title: '本次操作的名称',
    dataIndex: 'options'
  },
  {
    title: '操作人用户id',
    dataIndex: 'options_user'
  },
  {
    title: '操作用户名',
    dataIndex: 'options_name'
  },
  {
    title: '第一次记录时间',
    dataIndex: 'record_time'
  },
  {
    title: '更新时间',
    dataIndex: 'update_time'
  },
  {
    title: '还原的日志id',
    dataIndex: 'last_logId'
  }
];