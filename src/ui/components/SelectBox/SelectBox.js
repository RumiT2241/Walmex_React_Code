import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { useStyles } from "./SelectBoxstyle";
import { en } from "../../translation/en";

const SelectBox = ({ handleChange, items }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { button } = useStyles();
  const {TITLE_SELECT_BOX} = en;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeHandler = (item) => {
    handleChange(item);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="select-box"
        onClick={handleClick}
        className={button}
        endIcon={<ArrowDropDown />}
      >
        {TITLE_SELECT_BOX}
      </Button>
      <Menu
        id="select-box"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items &&
          items.map((item, index) => (
            <MenuItem
              key={index}
              value={item}
              onClick={() => changeHandler(item)}
            >
              {item}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default SelectBox;
