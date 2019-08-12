import {tableModelFn} from 'extends';
import {FAMILY_NEWS as namespace} from 'utils/namespace';
import {getFamilyNews as getTableData} from '../../service';


export default tableModelFn({
  namespace, 
  path: '/family/list/:id',
  getTableData
});