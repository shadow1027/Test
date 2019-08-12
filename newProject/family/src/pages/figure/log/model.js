import {tableModelFn} from 'extends';
import {FIGURE_LOG as namespace} from 'utils/namespace';
import {getFigureLog as getTableData} from '../service';

export default tableModelFn({
  namespace, 
  path: '/figure/log',
  getTableData
});