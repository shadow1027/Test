import request from 'utils/request';
import {getToken} from 'utils/storage';

export function logout() {
  return request({
    url: '/index.php',
    params: {
      action: 'account_action',
      sub_action: 'userLogout',
      id_token: getToken()
    }
  });
}