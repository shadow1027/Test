import request from 'utils/request';
import {getToken} from 'utils/storage';

const action = 'user_action';
function requestUser(sub_action, params={}) {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action,
      id_token: getToken(),
      ...params,
    }
  });
}
// 用户列表
export function getUserListData(params) {
  return requestUser('getUserList', params);
}
// 登录日志列表
export function getUserLoginLogData(params) {
  return requestUser('getUserLoginHistory', params);
}

// 用户新鲜事
export function getUserNews({id:userId, ...res}) {
  return requestUser('getFamilyNewsListBYUserId', {userId, ...res});
}