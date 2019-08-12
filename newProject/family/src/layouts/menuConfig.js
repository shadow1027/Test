export const menuConfig = [
  {
    path: '/permission',
    name: '权限管理',
    permission: 'permission_action',
    children: [
      {
        path: '/multistage',
        name: '多级管理员用户'
      },
      {
        path: '/log',
        name: '管理员日志'
      }
    ]
  },
  {
    path: '/family',
    name: '家族管理',
    permission: 'family_action',
    children: [
      {
        path: '/list',
        name: '家族列表'
      },
      {
        path: '/adminlist',
        name: '家族管理员/创始人列表'
      },
      {
        path: '/copy',
        name: '家族分支复制记录'
      },
      {
        path: '/delete',
        name: '家族分支删除还原记录'
      }
    ]
  },
  {
    path: '/user',
    name: '用户管理',
    permission: 'user_action',
    children: [
      {
        path: '/list',
        name: '用户列表'
      },
      {
        path: '/loginlog',
        name: '用户登录日志'
      }
    ]
  },
  {
    path: '/figure',
    name: '人物管理',
    permission: 'person_action',
    children: [
      {
        path: '/list',
        name: '人物列表'
      },
      {
        path: '/log',
        name: '人物日志'
      }
    ]
  },
  {
    path: '/log',
    name: '其他日志',
    permission: 'log_action',
    children: [
      {
        path: '/export',
        name: 'pdf 导出日志'
      },
      {
        path: '/active',
        name: '活动日志'
      },
      {
        path: '/article',
        name: '个人空间推文'
      },
      {
        path: '/comment',
        name: '个人空间推文评论'
      },
      {
        path: '/news',
        name: '家族新鲜事'
      }
    ]
  },
];

export const getFlattenData = () => {
  let flattenData = [];
  menuConfig.forEach(item => {
    if(item.children && item.children.length) {
      item.children.forEach(cItem => {
        flattenData.push({
          ...cItem,
          path: item.path + cItem.path,
          parentPath: item.path
        });
      });
    }else {
      flattenData.push(item);
    }
  });
  return flattenData;
}