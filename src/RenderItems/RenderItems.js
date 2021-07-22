import React, { memo } from "react";
import PropTypes from "prop-types";
import { Folder } from "../Folder";
import { File } from "../File";
import { Box } from "@material-ui/core";

const RenderItems = ({ data }) => {
  const renderedData = data.map((item, idx) => {
    const { type, name } = item;
    if (type === "FOLDER") {
      return <Folder {...item} key={`${type}_${name}_${idx}`} />;
    }
    return <File {...item} key={`${type}_${name}_${idx}`} />;
  });
  return <Box paddingLeft="2vw">{renderedData}</Box>;
};

RenderItems.propTypes = {
  data: PropTypes.array,
};
RenderItems.defaultProps = {
  data: [],
};

export default memo(RenderItems);
