import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const Search = ({ handleSearch, searchStr }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <TextField label="Search file" value={searchStr} onChange={handleChange} />
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
  searchStr: PropTypes.string,
};

Search.defautProps = {
  handleSearch: () => {},
  searchStr: "",
};

export default Search;
