import React, { useState, useEffect } from "react";
import UserList from "../TableView/TableView";
import { connect } from "react-redux";
import { ageTableHeaders, dropdownValues } from "../../contants/Constant";
import SelectBox from "../SelectBox/SelectBox";
import { fetchUserDataByItem } from "../../store/Actions/AgeAction";
import { useStyles } from "./AgeDetailStyle";
import { en } from "../../translation/en";

const AgeDetail = (props) => {
  const { ageInfo, fetchUserDetailByItem } = props;
  const [selectedItem, setSelectedItem] = useState("");
  const { root } = useStyles();
  const { HEADER_AGE } = en;

  useEffect(() => {
    if (selectedItem) {
      fetchUserDetailByItem(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={root}>
      <h1>
        {HEADER_AGE} {selectedItem}
      </h1>
      <SelectBox items={dropdownValues} handleChange={handleChange} />
      <UserList tableHeader={ageTableHeaders} data={ageInfo} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ageInfo: state.AgeInfoReducer.ageInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserDetailByItem: (selectedItem) => {
      dispatch(fetchUserDataByItem(selectedItem));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AgeDetail);
