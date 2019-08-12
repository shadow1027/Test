import pathToRegexp from 'path-to-regexp';
import modelExtend from 'dva-model-extend';
import baseModel from './baseModel';

/**
 * 表格公用 model
 * @param {string} namespace 命名空间
 * @param {string} path 匹配的路由
 * @param {function} getTableData 获取表格数据
 */
export default ({namespace, path, getTableData}) => (modelExtend(baseModel, {
  namespace,
  state: {
    tableData: {}
  },
  effects: {
    *getTableData({payload}, {call, put}) {
      let {pageIndex=1, pageSize=10, ...res} = payload;
      let params = {
        ...res,
        pageIndex,
        pageSize
      }
      let {data} = yield call(getTableData, params);
      yield put({
        type: 'updateState',
        payload: {
          tableData: data
        }
      });
    }
  },
  subscriptions: {
    setup({history, dispatch}) {
      return history.listen(({pathname, query}) => {
        let paramsKeys = [];
        let params = {};
        let matched = pathname.match(pathToRegexp(path, paramsKeys));
        if(matched) {
          // 得到路由参数对象
          paramsKeys.forEach((item, index) => {
            params[item.name] = matched[index + 1];
          });
          dispatch({
            type: 'getTableData',
            payload: {
              ...query,
              ...params
            }
          });
        }
      });
    }
  }
}));