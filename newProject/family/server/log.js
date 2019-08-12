const getList = require('./getList');

// pdf导出日志
function getPDFLogList(params) {
  return getList(params, {
    "familyId":"121",//家族id
    "preview_pdf": "[\"https:\/\/storage.izuqun.com\/wbA2P5v72HmmZiom0U0i1563875564.pdf\"]",//预览版pdf地址
    "print_pdf": "[\"https:\/\/storage.izuqun.com\/U1yTRzQD7MoEXZGL2aS41563875617.pdf\"]",//打印版pdf地址
    "finish":"1",//是否失败 0 未开始/进行中 1 完成 2 失败
    "finish_percent":"100%",//结束的进度
    "finish_status":"pdf导出完成",//结束的状态
    "failed_detail":null,//失败详情（原因）
    "create_time":"2019-07-23 17:52:40",//日志导出人物创建时间
    "create_by":"2",//创建者id
    "created_name":"jiang"//创建者姓名
  });
}
// 活动列表
function getActiveList(params) {
  return getList(params, {
    "familyId":"0",//活动所在家族id
    "title":"***支弹药***",//活动标题
    "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIKqAXa7fAACs6ukW49U410.jpg",//活动头像
    "type":"2",
    "startTime":"2019-05-02 14:38:00",//开始时间
    "endTime":"2019-05-10 14:38:00",//结束时间
    "deadline":"2019-04-29 20:39:00",//申请加入活动截止日期
    "coorX":"",
    "coorY":"",
    "address":"",
    "createBy":"354",
    "createTime":"2019-04-29 14:39:57",//创建时间
    "updateBy":"354",
    "updateTime":"2019-04-29 14:39:57",//更新时间
    "joinUsers":[] //参加活动用户列表
  });
}
// 个人空间推文
function getArticleList(params) {
  return getList(params, {
    "zoneId":"47",
    "userId":"1",//用户id
    "author":"jiang1111"//作者
    ,"authorPhoto":"https:\/\/image.izuqun.com\/SIDj6M5cLuVA07WgKA9n1530764924.jpg?width=1080&height=1080",//作者头像
    "content":"在测试服务器上测试推文的推送",//推文内容
    "coorX":null,
    "coorY":null,
    "address":"",
    "photo":"[]",
    "collection":null,
    "likeStatus":null,
    "commentCount":"0",//评论数
    "likeCount":"0",//喜欢数
    "type":"3",
    "createTime":"2017-12-22 11:24:29",//创建时间
    "createBy":"1",
    "updateTime":"2017-12-22 11:24:29",//更新时间
    "updateBy":"1"
  });
}
// 个人空间推文评论
function getCommentleList(params) {
  return getList(params, {
    "postId":"2391",//推文id
    "module":"5",//类型
    "userId":"543",//创建用户id
    "replyto":"920",//回复的评论id
    "replytoUserId":"543",//回复的上一条评论用户id
    "replytoUsername":"user_wQl1ho2wc0",//回复的评论用户名
    "comment":"22",//评论内容
    "createTime":"2019-08-06 15:38:05",//创建时间
    "createByName":"user_wQl1ho2wc0",//创建用户名
    "photo":"https:\/\/image.izuqun.com\/VMLZeF4WJxqRJTRsZHxn1526636001.jpg",//头像
  });
}
// 家族新鲜事
function getNews(params) {
  return getList(params, {
    "familyId":"688",//家族id
    "familyName":"欧阳家族",//家族名
    "module":"8",//类型
    "action":"4",
    "operatorId":"544",//操作用户id
    "username":"user_3sONMuNmFv",//用户名
    "nickname":"qqq",//用户昵称
    "photo":"https:\/\/image.izuqun.com\/n4YVBqZXROpE9fzcUFi41561692492.jpg?width=466&height=466",//用户头像
    "thingId":"6550217800651113473",//被操作的人物id
    "thingName":"网盘",//被操作的人物姓名 显示编辑thingName的资料即可
    "extraInfo1":"","extraInfo2":"",
    "createBy":"544",
    "createTime":"2019-07-25 18:04:11",//创建时间
    "updateBy":"544",
    "updateTime":"2019-07-25 18:04:11"//更新时间
  })
}

module.exports = {
  getPDFLogList,
  getActiveList,
  getArticleList,
  getCommentleList,
  getNews
}