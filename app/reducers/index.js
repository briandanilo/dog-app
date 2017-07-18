import { combineReducers } from 'redux'
import counter from './counter';
import questions from './questions';

export default combineReducers({
  counter,
  questions
})
