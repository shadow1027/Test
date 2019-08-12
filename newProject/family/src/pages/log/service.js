import request from 'utils/request';
import {getToken} from 'utils/storage';

const action = 'log_action';
function requestLog(sub_action, params={}) {
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
// pdf 导出列表
export function getPdfList(params) {
  return requestLog('getPDFLogList', params);
}

// 活动列表
export function getActiveList(params) {
  return requestLog('getActivityList', params);
}

// 个人空间推文
export function getArticleList(params){
  return requestLog('getRelatePostsList', params);
}

// 个人空间推文评论
export function getCommentList(params) {
  return requestLog('getRelatePostsCommentList', params);
}

// 家族新鲜事
export function getNewsList(params) {
  return requestLog('getFamilyNewsList', params);
}