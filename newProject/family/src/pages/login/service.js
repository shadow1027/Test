import request from 'utils/request';

export function getCode() {
  return request({
    url: '/index.php',
    params: {
      action: 'account_action',
      sub_action: 'captcha'
    },
    // 将responseType的默认json改为blob
    config: {
      responseType: 'blob',
      emulateJSON: true
    }
  });
}

export function getUserInfo(params) {
  return request({
    url: '/index.php',
    params
  })
}