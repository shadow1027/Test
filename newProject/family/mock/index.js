// const tablelist = [
//   {
//     id: '1',
//     name : 'umi',
//     desc : '极快的类 Next.js 的 React 应用框架',
//     url  : 'https://umijs.org'
//   },
//   {
//     id: '2',
//     name : 'antd',
//     desc : '一个服务于企业级产品的设计体系',
//     url  : 'https://ant.design/index-cn'
//   },
//   {
//     id: '3',
//     name : 'antd-pro',
//     desc : '一个服务于企业级产品的设计体系',
//     url  : 'https://ant.design/index-cn'
//   }
// ];
// let count = 100;
// export default {
//   'GET /list': {
//     "result": [
//       {
//         "id": "1",
//         "setup": "Did you hear about the two silk worms in a race?",
//         "punchline": "It ended in a tie"
//       },
//       {
//         "id": "2",
//         "setup": "What happens to a frog's car when it breaks down?",
//         "punchline": "It gets toad away"
//       },
//       {
//         "id": "3",
//         "setup": "hello",
//         "punchline": "world"
//       }
//     ]
//   },
//   'GET /api/tablelist': function(req, res) {
//     setTimeout(() => {
//       res.json({result:tablelist});
//     }, 300);
//   },
//   'POST /api/addRecord': function(req, res) {
//     count++;
//     tablelist.push({id: count, ...req.body});
//     setTimeout(() => {
//       res.json({result:tablelist});
//     }, 100);
//   },
//   'POST /api/login': function(req, res) {
//     res.json({isLogin: false})
//   }
// }