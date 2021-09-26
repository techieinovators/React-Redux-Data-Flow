import { combineReducers } from "redux";

import { todoReducer } from '../ActionsReducers/todo'

const allReducers = {
    todo: todoReducer
}

const reducers = combineReducers(allReducers)

export default reducers
