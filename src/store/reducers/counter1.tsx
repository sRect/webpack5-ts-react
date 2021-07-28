import * as types from '../actionTypes';
import {AnyAction} from 'redux';

export interface Counter1State {
  number: number;
}

const initialState:Counter1State = {
  number: 0
}

export default function(state: Counter1State = initialState, action:AnyAction): Counter1State {
  switch (action.type) {
    case types.ADD1:
      return {...state, number: state.number+1}
    default:
      return state
  }
}