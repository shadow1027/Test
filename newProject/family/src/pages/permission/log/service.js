import request from 'utils/request';
import {getToken} from 'utils/storage';

export function getTableData({...params}) {
  return request({
    url: 'index.php',
    params: {
      action: 'permission_action',
      sub_action: 'getLoginHistory',
      id_token: getToken(),
      ...params,
    }
  });
}