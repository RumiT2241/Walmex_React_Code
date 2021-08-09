import React, { useEffect } from "react";
import TableView from "../TableView/TableView";
import { userTableHeaders } from "../../contants/Constant";
import { fetchUserDetail } from "../../store/Actions/UserAction";
import { connect } from "react-redux";
import { useStyles } from "./UserStyle";
import { en } from "../../translation/en";
const Users = (props) => {
  const { root, title } = useStyles();
  const { userInfo, fetchUserInfo } = props;
  const { TITLE_USER, HEADER_USER } = en;
  useEffect(() => {
    if (!userInfo.length) {
      fetchUserInfo();
    }
  }, [userInfo]);
  return (
    <div className={root}>
      <h1 className={title}>{TITLE_USER}</h1>
      <p>{HEADER_USER}</p>
      <TableView tableHeader={userTableHeaders} data={userInfo} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userInfo: state.UserInfoReducer.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => {
      dispatch(fetchUserDetail());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
