import axios from 'axios';
import {setSession, getToken} from 'utils/storage';

const service = axios.create({
  baseURL: '/',
  timeout: 5000
});

// request 拦截器 ==> 对请求前的处理
service.interceptors.request.use(config => {
  // 判断是否存在token，如果存在的话，则每个http的请求头带上token
  if(getToken) {
    config.headers.Authorization = getToken();
  }
  return config;
}, err => {
  return Promise.reject(err);
})
// response 拦截器 ==> 对返回响应的处理
service.interceptors.response.use(response => {
  const {headers:{captcha_session}, config:{url}} = response;
  // 当响应为验证码的响应时，把captcha_session存到localStorage中
  if(url === '/index.php' && captcha_session) {
    setSession(captcha_session);
  }
  return response;
}, err => {
  return Promise.reject(err);
})

export function get(url, params) {
  return new Promise((resolve, reject) =>{
    service.get(url, {params})
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    })
  })
}

export function post(url, params, config) {
  return new Promise((resolve, reject) => {
    service.post(url, params, config)
    .then(res => {
      resolve(res.data);
    })
    .catch(err =>{
      reject(err.data)
    });
  });
}

export default function request({method='post', url, params, config}) {
  switch(method) {
    case 'get':
      return get(url, params);
    case 'post':
      return post(url, params, config);
  }
}