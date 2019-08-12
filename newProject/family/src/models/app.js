import modelExtend from 'dva-model-extend';
import {baseModel} from 'extends';
import {APP as namespace} from 'utils/namespace';
import router from 'umi/router';
import {logout} from 'services/app';
import {clearAll, getUserInfo} from 'utils/storage';

export default modelExtend(baseModel, {
  namespace,
  state: {
    userInfo: {}
  },
  effects: {
    *init({}, {put}) {
      yield put({
        type: 'updateState',
        payload: {
          userInfo: getUserInfo()
        }
      })
    },
    *logout({}, {call, put}) {
      let {errorCode} = yield call(logout);
      if(errorCode === '0') {
        clearAll();
        yield put({
          type: 'updateState',
          payload: {
            userInfo: {}
          }
        })
        router.replace('/login');
      }
    }
  },
  subscriptions: {
    setup({history, dispatch}){
      history.listen(() => {
        dispatch({
          type: 'init'
        });
      })
    }
  }
})