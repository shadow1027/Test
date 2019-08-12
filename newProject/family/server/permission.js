const moment = require('moment');

let adminList = [];
let id = 0;
// for (let i = 0; i < 5; i++) {
//   adminList.push({
//     "id": '' + i,
//     "username": "admin",
//     "menu_list": ["all"],
//     "action_list": ["all"],
//     "email": " ",
//     "phone": " ",
//     "add_time": "2019-07-31 14:14:13",
//     "last_login": "2019-08-02 10:39:24",
//     "last_ip": "192.168.50.4"
//   });
// }

function getAdminList(params) {
  const {pageIndex=1, pageSize=10} = params;
  let l = adminList.length;
  let paging = adminList;
  for (let i = (pageIndex - 1) * pageSize + l; i < pageIndex * pageSize; i++) {
    paging.push({
      "id": i + 1 + '', //日志id
      "option_detail": "登陆成功", //操作详情
      "option_user": "1", //操作人id
      "record_time": "2019-08-05 17:10:14",
      "other_msg": "{\"error_code\":0,\"error_msg\":\"\",\"id\":\"1\"}", //操作详情json，可以不展示
      "ip": "192.168.1.158", //本次操作ip地址
      "username": "admin", //操作人姓名
      "phone": "17878787878", //操作人手机
      "email": "skjflf@123.com" //操作人邮箱
    });
  }
  return {
    "firstPage":true,
    "lastPage":true,
    pageIndex,
    pageSize,
    total: 100,
    paging
  }
}
function addNewAdmin(params={}) {
  const {name:username, email, phone} = params;
  adminList.push({
    id: id++ + '',
    username,
    email,
    phone,
    add_time: moment().format('YYYY-MM-DD HH:mm'),
    menu_list: ['account_action', 'permission_action']
  });
}
function deleteAdmin(params={}) {
  const {adminId} = params;
  adminList = adminList.filter(item => item.id != adminId);
}
function editAdmin(params={}) {
  const {adminId, newPassword, menuList, ...res} = params;
  adminList = adminList.map(admin => {
    if(admin.id === adminId) {
      return {
        ...admin,
        ...res,
        menu_list: menuList
      }
    }
    return admin;
  })
}
// 操作记录
function getOptionLog(params) {
  const {pageIndex=1, pageSize=10} = params;
  let paging = [];
  for (let i = (pageIndex-1)*pageSize; i < pageIndex * pageSize; i++) {
    paging.push({
      "id": i + 1 + '', //日志id
      "option_detail": "登陆成功", //操作详情
      "option_user": "1", //操作人id
      "record_time": "2019-08-05 17:10:14",
      "other_msg": "{\"error_code\":0,\"error_msg\":\"\",\"id\":\"1\"}", //操作详情json，可以不展示
      "ip": "192.168.1.158", //本次操作ip地址
      "username": "admin", //操作人姓名
      "phone": "17878787878", //操作人手机
      "email": "skjflf@123.com" //操作人邮箱
    });
  }
  return {
    "firstPage": true, //boolean型，表示当前页是否是第一页
    "lastPage": false, //boolean型，表示当前页是否是最后一页
    pageIndex, //当前页码
    pageSize, //当前页的大小
    paging, //数组,当前页的数据列表
    "total": 100 //总数
  }
}
// 登录记录
function getLoginLog(params) {
  const {pageIndex=1, pageSize=10} = params;
  let paging = [];
  for (let i = (pageIndex-1)*pageSize; i < pageIndex * pageSize; i++) {
    paging.push({
      "id": i + 1 + '', //日志id
      "login_name": "admin", //登陆名
      "adminId": "1",//管理员id
      "login_ip": "192.168.50.4", //ip
      "login_time": "2019-08-02 10:39:24",//登陆时间
      "success": "1"//登陆状态，0失败 1 成功
    });
  }
  return {
    "firstPage": true, //boolean型，表示当前页是否是第一页
    "lastPage": false, //boolean型，表示当前页是否是最后一页
    pageIndex, //当前页码
    pageSize, //当前页的大小
    paging, //数组,当前页的数据列表
    "total": 100 //总数
  }
}

module.exports = {
  getAdminList,
  addNewAdmin,
  deleteAdmin,
  editAdmin,
  getOptionLog,
  getLoginLog,
}