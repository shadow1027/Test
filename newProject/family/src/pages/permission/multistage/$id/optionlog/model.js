import {tableModelFn} from 'extends';
import {PERMISSION_OPTION_LOG as namespace} from 'utils/namespace';
import {getTableData} from './service';


export default tableModelFn({
  namespace, 
  path: '/permission/multistage/:id/optionlog',
  getTableData
});