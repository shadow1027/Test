function getUrls(url) {
  url = url.match(/^\[(.+)\]$/)[1];
  let urls = url.split(',').filter(item => item).map(item => {
    let newUrl = item.replace(/\s/, '');
    let l = newUrl.length;
    return newUrl.slice(1, l - 1);
  });
  return urls;
}

export const columnConfig = [
  {
    title: '家族id',
    dataIndex: 'familyId'
  },
  {
    title: '预览版pdf',
    dataIndex: 'preview_pdf',
    render(text, record) {
     if(!text){
       return <></>
     }else{
      let urls = getUrls(record['preview_pdf']);
      return urls.map((item, index) => <a href={item} key={index}>下载{urls.length > 1 && index + 1} &nbsp;&nbsp;</a>);
     }
    }
  },
  {
    title: '打印版pdf',
    dataIndex: 'print_pdf',
    render(text, record) {
      if(!text){
        return <></>
      }else{
        let urls = getUrls(record['print_pdf']);
        return urls.map((item, index) => <a href={item} key={index}>下载{urls.length > 1 && index + 1} &nbsp;&nbsp;</a>);
      }
    }
  },
  {
    title: '结束',
    dataIndex: 'finish',
    render(text) {
      // 是否失败 0 未开始/进行中 1 完成 2 失败
      let newtext = text;
      if(text == 0) {
        newtext =  '未开始/进行中';
      }else if(text == 1) {
        newtext = '完成';
      }else if(text == 2) {
        newtext = '失败';
      }
      return newtext;
    }
  },
  {
    title: '结束进度',
    dataIndex: 'finish_percent'
  },
  {
    title: '结束状态',
    dataIndex: 'finish_status'
  },
  {
    title: '失败详情',
    dataIndex: 'failed_detail'
  },
  {
    title: '日志导出人物创建时间',
    dataIndex: 'create_time'
  },
  {
    title: '创建者id',
    dataIndex: 'create_by'
  },
  {
    title: '创建者姓名',
    dataIndex: 'created_name'
  }
];