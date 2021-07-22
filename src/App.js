import React, { useState, useCallback } from "react";
import { Container, Box } from "@material-ui/core";
import { RenderItems } from "./RenderItems";
import { Search } from "./Search";
import { findFiles } from "./utils/utils";
import data from "./data.json";

const App = () => {
  const [searchStr, setSearchStr] = useState("");
  const [treeData, setTreeData] = useState(data);
  console.log(`treeData`, treeData);

  const handleSearch = useCallback((searchValue) => {
    setSearchStr(searchValue);
    setTimeout(() => {
      setTreeData(findFiles(data, searchValue));
    }, 500);
  }, []);

  return (
    <Container>
      <Search handleSearch={handleSearch} searchStr={searchStr} />
      <Box>
        <RenderItems data={treeData} />
      </Box>
    </Container>
  );
};

export default App;
