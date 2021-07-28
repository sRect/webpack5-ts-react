import * as types from '../actionTypes';
import {AnyAction} from 'redux';

export interface Counter2State {
  number: number;
}

const initialState:Counter2State = {
  number: 0
}

export default function(state: Counter2State = initialState, action:AnyAction): Counter2State {
  switch (action.type) {
    case types.ADD2:
      return {...state, number: state.number+2}
    default:
      return state
  }
}