import React, { Component } from 'react';
import {Button} from 'antd';
import Link from 'umi/link';
import style from './style.less';

export default ({userInfo={}, handleLogout}) => {
  let showUser = false;
  let menuList = userInfo['menu_list'];
  if(Array.isArray(menuList)) {
    showUser = (menuList.includes('all') || menuList.includes('account_action'))
  }
  return (
    <div className={style['header-wrapper']}>
      <div className={style['header']}>后台管理系统</div>
      {showUser && (
        <Link to='/modifyUser'>
          <Button className={style['modify-user-info']} type='primary'>修改个人信息</Button>
        </Link>
      )}
      <Button className={style['sign-out']} type='primary' onClick={handleLogout}>退出登录</Button>
    </div>
  )
}