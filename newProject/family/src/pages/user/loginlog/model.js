import {tableModelFn} from 'extends';
import {USER_LOGIN_LOG as namespace} from 'utils/namespace';
import {getUserLoginLogData as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/user/loginlog',
  getTableData
});