import {tableModelFn} from 'extends';
import {PERMISSION_LOG as namespace} from 'utils/namespace';
import {getTableData} from './service';

export default tableModelFn({
  namespace, 
  path: '/permission/log',
  getTableData
});