import {resolve} from 'path';

export default {
  // 配置别名
  alias: { 
    src: resolve(__dirname, './src'),
    utils: resolve(__dirname, './src/utils'),
    components: resolve(__dirname, './src/components'),
    services: resolve(__dirname, './src/services'),
    extends: resolve(__dirname, './src/extends')
  },
  "proxy": {
    "/index.php": {
      "target": "http://192.168.3.204",
      "changeOrigin": true,
    },
    // "/index.php": {
    //   target: 'http://localhost:3000',
    //   "changeOrigin": true,
    // },
    // // 权限管理 -> 管理员日志
    // '/api/permission/log': {
    //   target: 'http://localhost:3000',
    //   "changeOrigin": true,
    // }
  },
  plugins: [
    ['umi-plugin-react', {
      antd: true, // 使用 antd
      dva: { // 使用 dva
        immer: true
      }, 
      routes: {
        // 配置忽略的路由
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /config\.js$/,
          /models\//,
          /components\//,
          /services\//
        ]
      },
      title: {
        defaultTitle: 'family'
      },
      library: 'react',
      locale: {
        default: 'zh-CN',
        baseNavigator: false,
        antd: true
      }
    }]
  ]
}