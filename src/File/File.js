import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, makeStyles } from "@material-ui/core";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";

const useStyle = makeStyles({
  file: {
    display: "flex",
    alignItems: "center",
  },
});

const File = ({ name }) => {
  const classes = useStyle();
  return (
    <Box className={classes.file}>
      <InsertDriveFileOutlinedIcon />
      <Typography>{name}</Typography>
    </Box>
  );
};

File.propTypes = {
  name: PropTypes.string,
};
File.defaultProps = {
  name: "",
};

export default File;
