import {tableModelFn} from 'extends';
import {FAMILY_LIST as namespace} from 'utils/namespace';
import {getFamilyList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/family/list',
  getTableData
});