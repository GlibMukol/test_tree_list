import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { RenderItems } from "../RenderItems";
import { Box, Typography, makeStyles } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

const useStyle = makeStyles({
  folder: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
});

const Folder = ({ name, children, showSearch }) => {
  const classes = useStyle();
  const [show, setShow] = useState(Boolean(false));
  const handleClick = () => setShow(!show);
  return (
    <Box>
      <Box onClick={handleClick} className={classes.folder}>
        {showSearch || show ? <FolderOpenIcon /> : <FolderIcon />}
        <Typography variant="h6">{name}</Typography>
      </Box>
      {(showSearch || show) && (
        <RenderItems data={children}>{name}</RenderItems>
      )}
    </Box>
  );
};

Folder.propTypes = {
  name: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};
Folder.defaultProps = {
  name: "",
  children: [],
};

export default memo(Folder);
