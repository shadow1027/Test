import modelExtend from 'dva-model-extend';
import pathToRegexp from 'path-to-regexp';
import {baseModel} from 'extends';
import {PERMISSION_ASSIGN as namespace} from 'utils/namespace';
import {editAdmin} from '../../service';

export default modelExtend(baseModel, {
  namespace,
  effects: {
    *assignPermission({payload}, {call}) {
      return yield call(editAdmin, payload);
    }
  },
})