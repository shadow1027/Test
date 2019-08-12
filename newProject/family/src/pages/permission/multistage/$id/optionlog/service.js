import request from 'utils/request';
import {getToken} from 'utils/storage';

export function getTableData({id:adminId, ...params}) {
  return request({
    url: 'index.php',
    params: {
      action: 'permission_action',
      sub_action: 'getOptionHistory',
      id_token: getToken(),
      adminId,
      ...params,
    }
  });
}