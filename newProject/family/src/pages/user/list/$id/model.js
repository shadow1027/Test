import {tableModelFn} from 'extends';
import {USER_NEWS as namespace} from 'utils/namespace';
import {getUserNews as getTableData} from '../../service';


export default tableModelFn({
  namespace, 
  path: '/user/list/:id',
  getTableData
});