import modelExtend from 'dva-model-extend';
import {tableModelFn} from 'extends';
import {PERMISSION_MULTISTAGE as namespace} from 'utils/namespace';
import {getTableData, addAdmin, deleteAdmin, editAdmin} from './service';

let tableModel = tableModelFn({
  namespace, 
  path: '/permission/multistage',
  getTableData
});

export default modelExtend(tableModel, {
  namespace,
  state: {
    showAddModal: false, // 是否显示添加管理员弹框
    showEditModal: false, // 是否显示修改管理员弹框
    currentRecord: {}, // 当前操作的行数据
  },
  effects: {
    *addAdmin({payload}, {call, put}) {
      let result = yield call(addAdmin, payload);
      yield put({type: 'getTableData'});
      return result;
    },
    *deleteAdmin({payload}, {call, put}) {
      yield call(deleteAdmin, payload);
      yield put({type: 'getTableData'});
    },
    *editAdmin({payload}, {call, put}) {
      let result = yield call(editAdmin, payload);
      yield put({type: 'updateState', payload: {currentRecord: {}}})
      yield put({type: 'getTableData'});
      return result;
    }
  }
});