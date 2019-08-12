import request from 'utils/request';
import {getToken} from 'utils/storage';

const action = 'family_action';
function requestFamily(sub_action, params={}) {
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
// 家族列表
export function getFamilyList(params) {
  return requestFamily('getFamilyList', params);
}
// 管理员列表
export function getFamilyAdminList(params) {
  return requestFamily('getFamilyAdminList', params);
}
// 家族分支复制记录
export function getFamilyCopyList(params) {
  return requestFamily('getBranchCopyLogList', params);
}
// 家族分支删除还原记录
export function getFamilyDeleteList(params) {
  return requestFamily('getBranchLogList', params);
}
// 家族新鲜事
export function getFamilyNews({id:familyId, ...res}) {
  return requestFamily('getFamilyNewsListBYFamilyId', {familyId, ...res});
}