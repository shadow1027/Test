import {tableModelFn} from 'extends';
import {FAMILY_COPY_LIST as namespace} from 'utils/namespace';
import {getFamilyCopyList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/family/copy',
  getTableData
});