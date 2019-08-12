module.exports = function getData(params={}, obj) {
  const {pageIndex=1, pageSize=10} = params;
  let paging = [];
  for (let i = (pageIndex-1) * pageSize; i < pageIndex * pageSize; i++) {
    paging.push({
      "id": i + 1 + '',//用户id
      ...obj
    });
  }
  return {
    "firstPage": true, //boolean型，表示当前页是否是第一页
    "lastPage": false, //boolean型，表示当前页是否是最后一页
    pageIndex, //当前页码
    pageSize, //当前页的大小
    paging, //数组,当前页的数据列表
    "total": 100 //总数
  }
}