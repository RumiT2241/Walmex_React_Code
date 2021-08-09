import { httpClient } from "../../ajax/AjaxWrapper";
import { getUserByAge } from "../../contants/ApiEndpoints";
import { HTTP_STATUS, HTTP_VERB } from "../../contants/EnumType";
import { MAP_AGE_INFO } from "../ActionType.js/AgeInfoActionType";

export const mapAgeInfo = (ageInfo) => {
  return {
    type: MAP_AGE_INFO,
    ageInfo,
  };
};

export const fetchUserDataByItem = (selectedItem) => {
  return (dispatch) => {
    return httpClient(getUserByAge(selectedItem), HTTP_VERB.GET)
      .then((res) => {
        if (res.status === HTTP_STATUS.SUCCESS && res.data.length) {
          dispatch(mapAgeInfo(res.data));
        }
      })
      .catch((err) => {
        dispatch(console.log(err));
      });
  };
};
