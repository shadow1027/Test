import request from 'utils/request';
import {getToken} from 'utils/storage';

const action = 'person_action';
function requestFigure(sub_action, params={}) {
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
// 人物列表
export function getFigureList(params) {
  return requestFigure('getPersonList', params);
}
// 人物详情
export function getFigureDetail(params) {
  return requestFigure('getPersonDetailById', params);
}
// 人物日志
export function getFigureLog(params) {
  return requestFigure('getPersonHistory', params);
}

