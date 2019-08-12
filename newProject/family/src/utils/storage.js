import store from 'store';
import {CAPTCHA_SESSION, TOKEN, USER_INFO} from 'utils/constant';

// 设置验证码 session
export const setSession = value => store.set(CAPTCHA_SESSION, value);
// 获取验证码 session
export const getSession = () => store.get(CAPTCHA_SESSION);

// 设置 token
export const setToken = value => store.set(TOKEN, value);
// 获取 token
export const getToken = () => store.get(TOKEN);

// 保存用户信息
export const setUserInfo = value => store.set(USER_INFO, value);
// 获取用户信息
export const getUserInfo = () => store.get(USER_INFO);


// 清空所有缓存
export const clearAll = () => store.clearAll();

