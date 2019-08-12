import {LOGIN as namespace, APP} from 'utils/namespace';
import router from 'umi/router';
import {message} from 'antd';
import {getUserInfo, getCode} from './service';
import {setUserInfo, setToken} from 'utils/storage';

export default {
  namespace,
  state: {
    loginCount: 0, // 登录点击次数
    timeRemaining: 10 * 60
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
    *getCode({}, {call, put}) {
      return yield call(getCode); // 返回的是一个Blob对象
    },
    *login({payload}, {call, put, select}) {
      let {loginCount} = yield select(store => store[namespace]);
      let result = {};
      let params = {
        action: 'account_action',
        sub_action: 'userLogin',
        ...payload
      }
      if(loginCount != 3) {
        result = yield call(getUserInfo, params);
      }
      const {errorCode, msg, data} = result;
      if(errorCode == '0') {
        // 登录成功后，保存用户信息和token，并跳转到首页
        setUserInfo(data);
        setToken(data.id_token);
        yield put({
          type: `${APP}/updateState`,
          payload: {userInfo: data}
        })
        router.push({pathname: '/'});
      }else {
        // 提示报错信息
        message.error(msg || '密码错误，请重新输入');
        // 登录不成功，登录次数(loginCount) + 1
        yield put({
          type: 'updateState',
          payload: {
            loginCount: loginCount + 1
          }
        });
      }
    }
  }
}