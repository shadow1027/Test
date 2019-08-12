const getList = require('./getList');
// 家族列表
function getFamilyList(params) {
  return getList(params, {
    "name":"诺克",//家族名
    "surname":"诺克家族",//家族姓氏
    "min_level":"0",//家族最小辈分
    "max_level":"3",//家族最大辈分
    "originator":"544",//创始人id
    "username":"user_3sONMuNmFv",//创始人姓名
    "member_count":"5",//家族总人数
    "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIGiAcC0aAABzAZZEmII488.jpg",//头像
    "create_time":"2019-07-17 10:18:01",//家族创建时间
    "update_time":"2019-07-17 10:18:01"//家族更新时间
  });
}
// 家族管理员列表
function getFamilyAdminList(params) {
  return getList(params, {
    "familyId":"705",//家族id
    "familyName":"诺克",//家族名
    "familySurname":"诺克家族",//家族姓氏
    "create_time":"2019-07-17 10:18:01",//创建时间
    "adminId":"544",//管理员的用户id
    "username":"user_3sONMuNmFv",//管理员的用户名
    "phone":"17701808806",//管理员手机
    "photo":"https:\/\/image.izuqun.com\/n4YVBqZXROpE9fzcUFi41561692492.jpg?width=466&height=466",//管理员头像
    "is_originator":1 //是否是创始人 0 否 1 是
  });
}
// 家族分支复制记录
function getFamilyCopyList(params) {
  return getList(params, {
    "oldFamilyId":"695",//复制的家族id
    "oldFamilyName":"上官家族",//复制家族名
    "copyedPersonId":"6554894561259291648",//复制起点人物id
    "copyedPersonName":"1",//复制人物名
    "newFamilyId":"704",//复制到的新家族id
    "NewFamilyName":"德玛",//复制到的家族名
    "newParentId":"6557080704004390912",//复制到的人物新起点
    "newParentName":"盖伦",//新起点名
    "isSetUserId":"0",//是否复制绑定人物关系 0 否 1 是
    "option_user":"544",//操作人
    "optionName":"user_3sONMuNmFv",//操作人姓名
    "record_time":"2019-07-17 10:46:19"//操作时间
  });
}
// 家族分支删除还原记录
function getFamilyDeleteList(params) {
  return getList(params, {
    "persons": [ //本次操作影响到的人物id集合
      {
        "id":"6557085441860829185",//人物id
        "name":"保时捷",//人物名
        "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIIGAHLV9AACamJVbrxQ690.jpg"//人物头像
      },
      {
        "id":"6557085442389311488",
        "name":"1",
        "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIMCABqZfAACALIbo__s039.jpg"
      },
      {
        "id":"6557085442901016577",
        "name":"C级",
        "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIDKAVXKmAACCQrzaxdw195.jpg"
      },
      {
        "id":"6557085443475636224",
        "name":"1许好运",
        "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIPKARRmRAACMdMf2pek163.jpg"
      },
      {
        "id":"6557085444041867264",
        "name":"许好运",
        "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIIGAHLV9AACamJVbrxQ690.jpg"
      }
    ],
    "personId":"6557085441860829185",//本次操作起始点人物id
    "person_name":"保时捷",//起始点人物名
    "person_photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIIGAHLV9AACamJVbrxQ690.jpg",//人物头像
    "familyId":"705",//家族id
    "family_name":"诺克",//家族名
    "options":"delete",//本次操作的名称 delete 删除 reset 还原
    "options_user":"544",//操作人用户id
    "options_name":"德莱厄斯",//操作用户名
    "record_time":"2019-07-17 10:44:19",//第一次记录时间
    "update_time":"2019-07-17 10:44:19",//更新时间
    "last_logId":"0"//还原的日志id 如果本次操作为reset 还原
  });
}
// 家族新鲜事
function getFamilyNewList(params) {
  return getList(params, {
    "familyId":"700",//家族id
    "familyName":"鑫火家族",//家族名
    "module":"8",//类型
    "action":"4",
    "operatorId":"543",//操作用户id
    "username":"user_wQl1ho2wc0",//用户名
    "nickname":"user_wQl1ho2wc0",//用户昵称
    "photo":"https:\/\/image.izuqun.com\/VMLZeF4WJxqRJTRsZHxn1526636001.jpg",//用户头像
    "thingId":"6556426334698995713",//被操作的人物id
    "thingName":"1",//被操作的人物姓名 显示“编辑thingName的资料“即可
    "extraInfo1":"","extraInfo2":"",
    "createBy":"543",
    "createTime":"2019-07-15 17:53:36",//创建时间
    "updateBy":"543",
    "updateTime":"2019-07-15 17:53:36"//更新时间
  });
}

module.exports = {
  getFamilyList,
  getFamilyAdminList,
  getFamilyCopyList,
  getFamilyDeleteList,
  getFamilyNewList
}