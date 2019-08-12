#### 使用 umi 搭建项目记录

#### 初始化项目
* 创建一个文件夹 
```bash
mkdir myapp
```
* 进入该文件夹，并初始化
```bash
cd myapp
npm init -y
```
* 安装相关依赖
```bash
cnpm install umi --save-dev
cnpm install dva --save
cnpm install umi-plugin-react --save-dev
```
* 配置启动命令 `package.json`
```js
...
"scripts": {
  "dev": "umi dev",
  "build": "umi build"
}
...
```
* 配置git忽略文件`.gitignore`
```
node_modules
dist
.umi
```
* 配置`.umirc.js`
```js
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true, // 使用 antd
    }]
  ]
}
```

#### 配置页面布局
在`src`目录下添加`layouts`文件夹，然后创建`index.js`，这个文件里面放置的是表示全局布局。
`umi`中好像集成了`less`，不需要额外配置就可以使用。

src/layouts/index.js
```js
import {Component} from 'react';
import {Layout} from 'antd';
import style from './style.less';

const {Header, Footer, Sider, Content} = Layout;

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider className={style['sider']}>
          Sider
        </Sider>
        <Layout>
          <Header className={style['header']}>Header</Header>
          <Content className={style['centent']}>
            <div className={style['cont']}>
              {this.props.children}
            </div>
          </Content>
          <Footer className={style['footer']}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
```
src/layouts/style.less
```less
.sider {
  width: 256px;
  color: #fff;
}
.header {
  background: #fff;
  text-align: center;
  padding: 0;
}
.centent {
  margin: 24px 16px 0;
  .cont {
    padding: 24px;
    background: #fff;
    min-height: 360px; 
  }
}
.footer {
  text-align: center;
}
```

### 完善侧边导航
src/layouts/index.js
```js
...
import LeftMenu from './LeftMenu';

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        // 使用侧边栏组件
        <LeftMenu /> 
        <Layout>
          // ...
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
```
src/layouts/LeftMenu.js
```js
import {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import style from './style.less';

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class LeftMenu extends Component {
  render() {
    return (
      <Sider className={style['sider']}>
        <div className={style['sider-title']}>后台管理</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <MenuItem key='1'>
            <Icon type='pie-chart' />
            <span>Hello World</span>
          </MenuItem>
          <SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='dashboard'/>
                <span>Dashboard</span>
              </span>
            }
          >
            <MenuItem key='2'>分析页</MenuItem>
            <MenuItem key='3'>监控页</MenuItem>
            <MenuItem key='4'>工作页</MenuItem>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default LeftMenu;
```

#### 创建新的页面
本文使用的是约定式路由，在`src/pages`文件夹下创建新的文件/文件夹，就可以根据对应的文件层级来使用路由访问了。
我们在`src/pages`创建三个文件夹`analysis`、`monitor`、`workspace`，然后分别在文件夹下创建`index.js`文件。
然后通过`http://localhost:8000/analysis`就可以访问`analysis`下的`index.js`文件了，其他路由同理。
```
...
|-- src
    |-- analysis
        | -- index.js
    |-- monitor
        | -- index.js
    |-- workspace
        | -- index.js
...
```
src/pages/analysis/index.js
```js
export default () => {
  return (<div>analysis</div>);
}
```

#### 实现侧边栏导航
之前的侧边栏只是实现展示的功能，现在增加点击跳到对应页面的导航功能。
src/layouts/LeftMenu.js
```js
...
<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
  <MenuItem key='1'>
    <Link to='/'>
      <Icon type='pie-chart' />
      <span>Hello World</span>
    </Link>
  </MenuItem>
  <SubMenu
    key='sub1'
    title={
      <span>
        <Icon type='dashboard'/>
        <span>Dashboard</span>
      </span>
    }
  >
    <MenuItem key='2'><Link to='/analysis'>分析页</Link></MenuItem>
    <MenuItem key='3'><Link to='/monitor'>监控页</Link></MenuItem>
    <MenuItem key='4'><Link to='/workspace'>工作页</Link></MenuItem>
  </SubMenu>
</Menu>
...
```

#### 使用`model`
本项目使用`dva`负责数据处理，`dva`是基于`redux`、`redux-saga`、`react-router`的轻量级前端框架，`model`是`dva`中最重要的概念。配置`.umirc.js`
.umirc.js
```js
export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true, // 使用 antd
      dva: { // 使用 dva
        immer: true
      }
    }]
  ]
}
```
