import React from 'react';
import Redirect from 'umi/redirect';
import {connect} from 'dva';
import {APP} from 'utils/namespace';
import {menuConfig} from 'src/layouts/menuConfig';

const HomePage = ({userInfo:{menu_list=[]}}) => {
  let path = 'noAuth';
  if(menu_list.includes('all')) {
    path = '/permission/multistage';
  }else {
    let fiterMenu = menuConfig.filter(item => menu_list.includes(item.permission))[0] || {};
    path = fiterMenu.path || path;
  }
  return <Redirect to={path} />
}

export default connect(store => store[APP])(HomePage);