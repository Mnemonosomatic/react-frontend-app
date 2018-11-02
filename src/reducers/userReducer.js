import {LOGIN_USER} from '../actions/types'

const initialState = {
  user_id: null,
  data: [],
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user_id: action.payload.id,
        data: action.payload
      }
    case LOGOUT_USER:
      return state = initialState;
    default:
      return state;
  }
}

export default usersReducer;
