import {tableModelFn} from 'extends';
import {FIGURE_LIST as namespace} from 'utils/namespace';
import {getFigureList as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/figure/list',
  getTableData
});