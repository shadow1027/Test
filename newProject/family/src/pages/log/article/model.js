import {tableModelFn} from 'extends';
import {LOG_ARTICLE as namespace} from 'utils/namespace';
import {getArticleList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/log/article',
  getTableData
});