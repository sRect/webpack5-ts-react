import React, { FC } from 'react';
import {Dispatch} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {CombinedState} from '../store/reducers';
import * as types from '../store/actionTypes';

interface Props {
  [propName:string]: unknown
}

// React.FC<>为typescript使用的泛型
const Counter1:FC<Props> = () => {
  const state = useSelector((state:CombinedState) => state.counter2Reducer);
  const dispatch: Dispatch = useDispatch();

  const {number} = state;

  return (
    <div>
      counter1: number = {number}
      <br />
      <button onClick={() => dispatch({
        type: types.ADD2,
        payload: 10 
      })}>add</button>
    </div>
  )
}

export default Counter1;