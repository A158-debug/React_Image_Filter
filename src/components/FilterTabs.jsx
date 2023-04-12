import React, { useContext } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { FilterContext } from "../ContextProvider";

const FilterTabs = () => {
  const {
    tabFilter,
    setTabFilter,
    setFilterClass,
  } = useContext(FilterContext);

  const resetValue = {
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  };


  const handleChange = (event, newValue) => {
    setTabFilter(newValue);
    if (newValue === "customFilter") {
      setFilterClass("");
    } 
    // else if (newValue === "resetFilter") {
    //   console.log("reset filter");
    //   setFilterClass("");
    //   setCustomFilter({ ...customFilter, ...resetValue });
    // }
  };
  return (
    <Box sx={{ marginBottom: "2rem" }}>
      <Tabs
        value={tabFilter}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="instaFilter" label="Instagram Filter" />
        <Tab value="customFilter" label="Custom Filter" />
        {/* <Tab value="resetFilter" label="Reset" /> */}
      </Tabs>
    </Box>
  );
};

export default FilterTabs;
