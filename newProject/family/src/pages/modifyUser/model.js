import {MODIFY_USER as namespace} from 'utils/namespace';
import {getUserInfo, updateUserInfo} from './service';
import { message } from 'antd';

export default {
  namespace,
  state: {
    userInfo: {},
    show: false
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    *getUserInfo({}, {call, put}) {
      let {data} = yield call(getUserInfo);
      yield put({
        type: 'updateState',
        payload: {
          userInfo: data.userInfo
        }
      })
    },
    *updateUserInfo({payload}, {call, put}) {
      yield call(updateUserInfo, payload);
      yield put({
        type: 'updateState',
        payload: {show: false}
      });
      message.success('密码修改成功');
    }
  },
  subscriptions: {
    setup({history, dispatch}) {
      history.listen(({pathname}) => {
        if(pathname === '/modifyUser') {
          dispatch({
            type: 'getUserInfo'
          })
        }
      })
    }
  }
}