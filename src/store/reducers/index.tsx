import {combineReducers,ReducersMapObject,AnyAction,Reducer} from 'redux';
import counter1Reducer, {Counter1State} from './counter1';
import counter2Reducer,{Counter2State} from './counter2';

// 合并后的状态定义
export interface CombinedState {
  counter1Reducer: Counter1State,
  counter2Reducer: Counter2State,
}

const reducers:ReducersMapObject<CombinedState, AnyAction> = {
  counter1Reducer,
  counter2Reducer
}

// export type CombinedState = {
//   [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
// }

const reducer:Reducer<CombinedState, AnyAction> = combineReducers(reducers);

export default reducer; 

