import {tableModelFn} from 'extends';
import {LOG_ACTIVE as namespace} from 'utils/namespace';
import {getActiveList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/log/active',
  getTableData
});