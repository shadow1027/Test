const getList = require('./getList');

// 用户列表
function getUserList(params) {
  return getList(params, {
    "user_type":"1",//用户类型
    "username":"user_RB1imtM15N",//用户名
    "nickname":"user_RB1imtM15N",//昵称
    "phone":"15195108961",//手机
    "email":"",//邮箱
    "photo":"https:\/\/image.izuqun.com\/VMLZeF4WJxqRJTRsZHxn1526636001.jpg",//头像
    "gender":"2", // 0 女 1 男 2 未知
    "birthday":null,//生日
    "create_time":"2019-07-30 09:33:11",//创建时间
    "update_time":"2019-07-30 09:33:11"//更新时间
  })
}

// 登录日志
function getUserLoginLogList(params) {
  return getList(params, {
    "login_name":"17701808806",//登陆用户名
    "device":"1",//设备标识
    "userId":"544",//用户id
    "login_ip":"101.231.137.70",//登陆ip
    "login_time":"2019-07-30 09:25:19",//登陆时间
    "success":"1"//是否成功 1 成功 0 失败
  });
}

// 新鲜事
function getUserNews(params) {
  return getList(params, {
    "familyId":"688",//家族id
    "familyName":"欧阳家族",//家族名
    "module":"8", //模块id
    "action":"4",
    "operatorId":"544",//操作用户id
    "username":"user_3sONMuNmFv",//用户名
    "nickname":"qqq",//昵称
    "photo":"https:\/\/image.izuqun.com\/n4YVBqZXROpE9fzcUFi41561692492.jpg?width=466&height=466",//头像
    "thingId":"6550217800651113473",//被操作的人物id
    "thingName":"网盘", //被操作的人物姓名 显示“编辑thingName的资料“ 即可
    "extraInfo1":"","extraInfo2":"",
    "createBy":"544",
    "createTime":"2019-07-25 18:04:11",//创建时间
    "updateBy":"544",
    "updateTime":"2019-07-25 18:04:11"//更新时间
  });
}

module.exports = {
  getUserList,
  getUserLoginLogList,
  getUserNews
}