/**
 * express 快速方便的构建服务器
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const account = require('./account');
const permission = require('./permission');
const log = require('./log');
const user = require('./user');
const family = require('./family');
const figure = require('./figure');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // extended: true 表示表单序列化的时候用 qs 库

// 返回用户信息
app.post('/index.php', function(req, res) {
  console.log(req.body);
  let {action, sub_action} = req.body;
  if(action === 'account_action') { // 账户相关
    if(sub_action === 'captcha') { // 返回图片验证码
      res.setHeader('Content-Type', 'image/png');
      res.setHeader('captcha_session', 'kdjfalsfjlsfkjl');
      fs.createReadStream(path.join(__dirname, 'genimage.png')).pipe(res)
    }else if(sub_action === 'userLogin') { // 表示用户登录接口
      // 登录成功返回
      const result = {
        errorCode: '0', // 登录状态，0 表示登录成功；其他值表示 密码错误，登录失败
        msg: '',
        data: account.loginData
      }
      res.json(result);
    }else if(sub_action === 'userLogout') { // 用户退出登录
      res.json({
        errorCode: '0', // 错误标识，0 表示正确
        msg: '', // 如果错误，此处为错误详情
        data: {}
      });
    }else if(sub_action === 'getUserInfo') { // 获取当前用户信息
      res.json({
        "errorCode": "0",
        "msg": "",
        "data": {
          userInfo: account.userInfo
        }
      })
    }else if(sub_action === 'changeMyInfo') { // 修改当前用户信息
      account.updateUserInfo(req.body);
      res.json({
        "errorCode": "0", //错误标识 0表示正确
        "msg": "",  //如果错误，此处为错误详情
        "data": {  //返回数据
        "count": "1"
        }
      });
    }
  }else if(action === 'permission_action') { // 权限管理
    if(sub_action === 'getAdminList') { // 获取管理员列表
      res.json({
        errorCode: '0',
        msg: '',
        data: permission.getAdminList(req.body)
      });
    }else if(sub_action === 'addNewAdmin') { // 添加管理员
      permission.addNewAdmin(req.body);
      res.json({
        "errorCode": "0",
        "msg": "",
        "data": {
          "newAdminId": 20
        }
      })
    }else if(sub_action === 'deleteAdmin') { // 删除管理员
      permission.deleteAdmin(req.body);
      res.json({
        "errorCode": "0",
        "msg": "",
        "data": {}
      });
    }else if(sub_action === 'changeUserInfo') { // 修改管理员信息
      permission.editAdmin(req.body);
      res.json({
        "errorCode": "0",
        "msg": "",
        "data": {
          count: 1
        }
      })
    }else if(sub_action === 'getOptionHistory') { // 管理员操作记录
      res.json({
        "errorCode": "0",
        "msg": "",
        "data": permission.getOptionLog(req.body)
      })
    }else if(sub_action === 'getLoginHistory') { // 管理员登录日志
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": permission.getLoginLog(req.body)
      });
    }
  }else if(action === 'log_action') { // 其他日志
    if(sub_action === 'getPDFLogList') { // pdf 导出日志
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": log.getPDFLogList(req.body)
      })
    }else if(sub_action === 'getActivityList') { // 活动列表
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": log.getActiveList(req.body)
      })
    }else if(sub_action === 'getRelatePostsList') { // 个人空间推文
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": log.getArticleList(req.body)
      })
    }else if(sub_action === 'getRelatePostsCommentList') { // 个人空间推文评论
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": log.getCommentleList(req.body)
      })
    }else if(sub_action === 'getFamilyNewsList') { // 获取家族新鲜事
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": log.getNews(req.body)
      })
    }
  }else if(action === 'user_action') { // 用户管理
    if(sub_action === 'getUserList') { // 用户列表
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": user.getUserList(req.body)
      })
    }else if(sub_action === 'getUserLoginHistory') { // 登录日志列表
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": user.getUserLoginLogList(req.body)
      })
    }else if(sub_action === 'getFamilyNewsListBYUserId') { // 用户新鲜事
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": user.getUserNews(req.body)
      })
    }
  }else if(action === 'family_action') { // 家族管理
    if(sub_action === 'getFamilyList') { // 家族列表
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": family.getFamilyList(req.body)
      })
    }else if(sub_action === 'getFamilyAdminList') { // 家族管理员列表
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": family.getFamilyAdminList(req.body)
      })
    }else if(sub_action === 'getBranchCopyLogList') { // 家族分支复制记录
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": family.getFamilyCopyList(req.body)
      })
    }else if(sub_action === 'getBranchLogList') { // 家族分支删除还原记录
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": family.getFamilyDeleteList(req.body)
      })
    }else if(sub_action === 'getFamilyNewsListBYFamilyId') { // 家族新鲜事
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": family.getFamilyNewList(req.body)
      })
    }
  }else if(action === 'person_action') { // 人物管理
    if(sub_action === 'getPersonList') { // 人物列表
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": figure.getFigureList(req.body)
      });
    }else if(sub_action === 'getPersonDetailById') { // 人物详情
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": figure.getFigureDetail(req.body)
      })
    }else if(sub_action === 'getPersonHistory') {
      res.json({
        "errorCode":"0",
        "msg":"",
        "data": figure.getFigureLog(req.body)
      })
    }
  }
});

// listen 监听启动端口号
app.listen(3000, () => {
  console.log('server started at port 3000');
});