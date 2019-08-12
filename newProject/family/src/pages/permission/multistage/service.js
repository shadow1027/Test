import request from 'utils/request';
import {getToken} from 'utils/storage';

const action = 'permission_action';

export function getTableData(params) {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action: 'getAdminList',
      id_token: getToken(),
      ...params
    }
  });
}

export function addAdmin(params={}) {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action: 'addNewAdmin',
      id_token: getToken(),
      ...params
    }
  })
}

export function deleteAdmin(params={}) {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action: 'deleteAdmin',
      id_token: getToken(),
      ...params
    }
  })
}

export function editAdmin(params={}) {
  return request({
    url: 'index.php',
    params: {
      action,
      sub_action: 'changeUserInfo',
      id_token: getToken(),
      ...params
    }
  });
}