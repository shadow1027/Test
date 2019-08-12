const getList = require('./getList');
// 人物列表
function getFigureList(params) {
  return getList(params, {
    "same_personId":"0",//过继人物id
    "familyId":"689",//家族id
    "family_name":"张氏",//家族名
    "userId":"0",//绑定用户id 0 未绑定
    "username":null,//用户名
    "type":"2",//类型 1 本家 2 配偶
    "is_delete":"0",//是否死亡
    "name":"啦啦啦", //人物姓名
    "gender":"0",//性别 0 女 1男
    "photo":"https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIDKAVXKmAACCQrzaxdw195.jpg",//头像
    "is_dead":"0"//是否死亡
    ,"is_adoption":"0",//是否过继 0 否 
    "dead_time":null   //死亡时间
  });
}
// 人物详情
function getFigureDetail(params) {
  return {
    person: {
      "name": "我是姓名",//人物姓名
      "zpname": "",
      "hxUsername": "",
      "type": "1",//人物type 2 表示配偶 1表示主系
      "level": "0",//人物辈分
      "address": "",//地址
      "birthday": "2019-07-10",//生日
      "gender": "1",//性别 1男 0 女
      "photo": "https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIKqAXa7fAACs6ukW49U410.jpg",//头像
      "phone": "",//手机
      "bloodType": "0",//血型
      "maritalStatus": "0",
      "qq": "",//qq
      "shareUrl": "71589f4f7d5de9e8cfac0ed9296a3fd6",//分享Url
      "familyId": "688",//家族id
      "familyName": "欧阳家族",//家族姓名
      "groupType": "1",
      "familyPhoto": "https:\/\/image.izuqun.com\/fastdfs\/M00\/00\/05\/dD4ZgFmmIIGAHLV9AACamJVbrxQ690.jpg",//家族头像
      "refFamilyId": [],
      "refPersonId": [],
      "userId": "0",//绑定用户的id 0 表示未绑定
      "father": "@6550212581938693121|",//人物关系，下方有详细的id姓名对应数组
      "mother": "@6550212725157397504|",
      "brother": "@6550212348613755905|@6550217925284856832|@6550213263450178560|@6550220603935163392|@6550252351112872961|",
      "sister": "@6550217964660982785|",
      "spouse": "",
      "son": "",
      "daughter": "",
      "country": "0",
      "city": "0",
      "province": "0",
      "area": "0",
      "town": "0",
      "relation": "",
      "corePersonId": "",
      "branchId": "0",
      "profileText": "", //人物详细介绍
      "sideText": "我是这的老大",//侧边栏文本
      "countryName": "0",//国家名
      "cityName": "0"//城市名
      ,"provinceName": "0",//省名
      "areaName": "0",//地区名
      "townName": "0",//乡镇名
      "createBy": "544",//创建用户id
      "createTime": "2019-06-28 11:28:59",//创建时间
      "updateBy": "544",//更新用户id
      "updateTime": "2019-07-25 17:52:11",//更新时间
      "zi": "",//字
      "remark": "",
      "isDead": "0",//是否死亡 0 未死亡 1 已死亡
      "isAdoption": "0",//是否过继 0 未过继
      "deadTime": null,//死亡事件
      "samePersonId": "0",//过激的人物id
      "ranking": "0",//家庭中兄弟排行
      "isDelete": "",//是否删除
      "infoCardId": "",
      "confirm": "",
      "qrcode": "",
      "fatherName": {"6550212581938693121": "欧阳爸爸"},//父亲 id : 姓名
      "motherName": {"6550212725157397504": "李三"},//母亲
      "sonName": [],//儿子
      "daughterName": [],//女儿
      "spouseName": [],//配偶
      "brotherName": {
        "6550212348613755905": "欧阳爷爷",
        "6550217925284856832": "a",
        "6550213263450178560": "我是姓名",
        "6550220603935163392": "红米",
        "6550252351112872961": "老大"
      },//兄弟
      "sisterName": {"6550217964660982785": "b"} //姐妹
    }
  }
}
// 人物日志
function getFigureLog(params) {
  return getList(params, {
    "personId":"6550217800651113473",//用户id
    "person_name":"网盘",//人物姓名
    "familyId":"688",//家族id
    "family_name":"欧阳家族",//家族姓名
    "option_detail":"编辑人物基本信息",//操作详情
    "option_user":"544",//操作用户id
    "record_time":"2019-07-25 18:04:11",//记录时间
    "update_time":"2019-07-25 18:04:11"//更新时间
  });
}

module.exports = {
  getFigureList,
  getFigureDetail,
  getFigureLog
}