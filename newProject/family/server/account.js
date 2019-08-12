const loginData = { // 管理员信息
  id: '1',
  username: 'admin',
  menu_list: ['all'], // 权限菜单，all 表示超级管理员
  action_list: ['all'],
  email: '',
  phone: '',
  add_time: '2019-07-31 14:14:13',
  last_login: '2019-07-31 16:44:04', // 上次登录时间
  last_ip: '192.168.50.206', // 上次登录地址
  id_token: 'kdfjlakdjfalkdfjlakfksjfkfjkjfk2874824' // token 用户登录标识，后面所有的操作都需要带上这个参数，用于识别用户身份信息
}
let userInfo = {
  "id":"1",
  "username":"admin",
  "menu_list":["all"],
  "action_list":["all"],
  "email":"abcsdjf@126.com",
  "phone":"17897878778",
  "add_time":"2019-07-31 14:14:13",
  "last_login":"2019-08-02 10:39:24",
  "last_ip":"192.168.50.4"
}

function updateUserInfo(params) {
  userInfo = {
    ...userInfo,
    ...params
  }
}

module.exports = {
  loginData,
  userInfo,
  updateUserInfo
}