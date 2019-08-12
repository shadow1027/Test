import {tableModelFn} from 'extends';
import {USER_LIST as namespace} from 'utils/namespace';
import {getUserListData as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/user/list',
  getTableData
});