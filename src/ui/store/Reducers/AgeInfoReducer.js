import { MAP_AGE_INFO } from "../ActionType.js/AgeInfoActionType";

const initialState = {
  ageInfo: [],
};
const AgeInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_AGE_INFO: {
      return {
        ...state,
        ageInfo: action.ageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

export default AgeInfoReducer;
