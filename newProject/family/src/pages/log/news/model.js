import {tableModelFn} from 'extends';
import {LOG_NEWS as namespace} from 'utils/namespace';
import {getNewsList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/log/news',
  getTableData
});