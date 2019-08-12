import {tableModelFn} from 'extends';
import {LOG_COMMENT as namespace} from 'utils/namespace';
import {getCommentList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/log/comment',
  getTableData
});