import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';
import {menuConfig, getFlattenData} from './menuConfig';
import style from './style.less';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const ListItem = ({path, name, ...res}) => {
  return (
    <MenuItem {...res}>
      <Link to={path}>
        <span>{name}</span>
      </Link>
    </MenuItem>
  )
}

const menuList = (menu_list=[]) => {
  return menuConfig
    .filter(menu => (menu_list.includes('all') || menu_list.includes(menu.permission)))
    .map(menu => {
    const {path, name, children} = menu;
    if(Array.isArray(children) && children.length) {
      return (
        <SubMenu
          key={path}
          title={<span>{name}</span>}
        >
          {
            children.map(({path:cPath, ...cMenu}) => {
              let childPath = `${path}${cPath}`;
              return <ListItem key={childPath} path={childPath} {...cMenu} />
            })
          }
        </SubMenu>
      );
    }else {
      return <ListItem key={path} {...menu} />
    }
  });
}

class LeftMenu extends Component {
  state = {
    openKeys: []
  }
  componentDidMount() {
    const {location:{pathname}} = this.props;
    let openKeys = (getFlattenData().find(item => item.path === pathname) || {}).parentPath || '';
    this.setState({
      openKeys: [openKeys]
    });
  }
  
  onOpenChange = (openKeys) => {
    let l = openKeys.length;
    let lastKey = l ? openKeys[l-1] : '';
    this.setState(() => ({
      openKeys: [lastKey].filter(item => item)
    }));
  }
  render() {
    const {location:{pathname}, userInfo:{menu_list}={}} = this.props;
    const {openKeys} = this.state;
    return (
      <Sider className={style['sider']}>
        <div className={style['sider-title']}>后台管理</div>
        <Menu
          theme='dark' 
          mode='inline' 
          defaultSelectedKeys={[pathname]}
          openKeys={openKeys}
          onOpenChange={this.onOpenChange}
        >
          {menuList(menu_list)}
        </Menu>
      </Sider>
    )
  }
}

export default LeftMenu;
