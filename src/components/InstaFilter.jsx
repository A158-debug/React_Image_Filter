import React,{useContext} from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { Box } from "@mui/system"
import { filterValues } from "../utils";
import { FilterContext } from "../ContextProvider";

const InstaFilter = () => {

  const {filterClass,setFilterClass} = useContext(FilterContext)

  const handleChange = (e) => setFilterClass(e.target.value);

  return (
    <Box sx={{ maxWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select onChange={handleChange} value={filterClass} label="Filter">
          {filterValues.map(filter => <MenuItem value={filter.class} key={filter.class}>{filter.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default InstaFilter;
