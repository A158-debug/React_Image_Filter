import React ,{ useContext,useEffect, useState } from "react";
import { Slider } from "@mui/material"
import { Box } from "@mui/system"
import { FilterContext } from  '../ContextProvider'

const SliderField = ({ slide }) => {
  const { label, defaultValue, field } = slide;
  const [value, setValue] = useState(defaultValue);
  const { customFilter, setCustomFilter } = useContext(FilterContext);

  useEffect(() => {
    setCustomFilter({ ...customFilter, [field]: value });
  }, [value]);

  const handleSliderValue = (e) => setValue(e.target.value);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ minWidth: "6rem" }}>{label}</Box>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        value={value}
        onChange={handleSliderValue}
        max={200}
      />
    </Box>
  );
};

export default SliderField;
