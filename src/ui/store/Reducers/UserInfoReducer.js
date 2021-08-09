import { MAP_USER_DETAIL } from "../ActionType.js/UserActionType";

const initialState = {
  userInfo: []
};
const UserInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_USER_DETAIL: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    default:{
        return state;
    }
  }
};

export default UserInfoReducer;
