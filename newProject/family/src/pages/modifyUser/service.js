import request from 'utils/request';
import {getToken} from 'utils/storage';

const action = 'account_action';

export function getUserInfo() {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action: 'getUserInfo',
      id_token: getToken()
    }
  })
}

export function updateUserInfo(params) {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action: 'changeMyInfo',
      id_token: getToken(),
      ...params
    }
  })
}