import pathToRegexp from 'path-to-regexp';
import modelExtend from 'dva-model-extend';
import {baseModel} from 'extends';
import {FIGURE_DETAIL as namespace} from 'utils/namespace';
import {getFigureDetail} from '../../service';

export default modelExtend(baseModel, {
  namespace,
  state: {
    figureData: {}
  },
  effects: {
    *getFigureDetail({payload}, {call, put}) {
      let {data} = yield call(getFigureDetail, payload);
      yield put({
        type: 'updateState',
        payload:{
          figureData: data.person
        }
      })
    }
  },
  subscriptions:{
    setup({history, dispatch}) {
      return history.listen(({pathname}) => {
        let matched = pathname.match(pathToRegexp('/figure/list/:id'));
        if(matched) {
          dispatch({
            type: 'getFigureDetail',
            payload: {
              personId: matched[1]
            }
          });
        }
      });
    }
  }
});