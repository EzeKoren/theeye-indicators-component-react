import { combineReducers } from 'redux'
import session from './session'
import counter from './counter'
import indicators from './indicators'

export default {
  combine () {
    return combineReducers({
      counter,
      session,
      indicators
    })
  }
}
