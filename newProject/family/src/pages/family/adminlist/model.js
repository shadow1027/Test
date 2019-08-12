import {tableModelFn} from 'extends';
import {FAMILY_ADMIN_LIST as namespace} from 'utils/namespace';
import {getFamilyAdminList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/family/adminlist',
  getTableData
});