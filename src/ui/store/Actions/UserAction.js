import { httpClient } from "../../ajax/AjaxWrapper";
import { getUsersUrl } from "../../contants/ApiEndpoints";
import { HTTP_STATUS, HTTP_VERB } from "../../contants/EnumType";
import { MAP_USER_DETAIL } from "../ActionType.js/UserActionType";

export const mapUserDetail = (userInfo) => {
  return {
    type: MAP_USER_DETAIL,
    userInfo,
  };
};
export const fetchUserDetail = () => {
  return (dispatch) => {
    return httpClient(getUsersUrl, HTTP_VERB.GET)
      .then((res) => {
        if (res.status === HTTP_STATUS.SUCCESS && res.data.length) {
          dispatch(mapUserDetail(res.data));
        }
      })
      .catch((err) => {
        dispatch(console.log(err));
      });
  };
};
