import { CLEAN_DETAIL, CREATE_USER, GET_DETAIL, GET_USERS } from "./actions";

const initialState = {
  users: [],
  myUser: [],
  detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_DETAIL:
      return {...state, detail: action.payload };
    case CLEAN_DETAIL:
      return {...state, detail: {}};
    case CREATE_USER:
      return {...state, myUser: [...state.myUser, action.payload]}
    default:
      return { ...state };
  }
};

export default rootReducer;
