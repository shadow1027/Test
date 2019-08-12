import {tableModelFn} from 'extends';
import {FAMILY_DELETE_LIST as namespace} from 'utils/namespace';
import {getFamilyDeleteList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/family/delete',
  getTableData
});