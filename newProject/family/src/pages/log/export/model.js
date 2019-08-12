import {tableModelFn} from 'extends';
import {LOG_EXPORT as namespace} from 'utils/namespace';
import {getPdfList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/log/export',
  getTableData
});