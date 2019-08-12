import withRouter from 'umi/withRouter';
import {Component} from 'react';
import Redirect from 'umi/redirect';
import {connect} from 'dva';
import {Layout} from 'antd';
import LeftMenu from './LeftMenu';
import HeaderCom from 'components/header';
import {APP} from 'utils/namespace';
import {getToken} from 'utils/storage';
import style from './style.less';

const {Header, Content} = Layout;

class BasicLayout extends Component {
  handleLogout = () => {
    this.props.dispatch({
      type: `${APP}/logout`
    });
  }
  render() {
    const {location, userInfo} = this.props;
    const headerProps = {
      userInfo,
      handleLogout: this.handleLogout
    }
    return (
      <Layout className={style['container']}>
        <LeftMenu location={location} userInfo={userInfo} />
        <Layout>
          <Header className={style['header']}>
            <HeaderCom {...headerProps} />
          </Header>
          <Content className={style['centent']}>
            <div className={style['cont']}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const Page = (props) => {
  const {location:{pathname}, children} = props;
  if(pathname === '/login') {
    return children;
  }else if(!getToken()) {
    return <Redirect to='/login' />
  }
  return <BasicLayout {...props} />;
}

export default withRouter(connect(store => {
  return {
    ...store[APP]
  }
})(Page));