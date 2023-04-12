import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const ContextProvider = ({ children }) => {

  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });

  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter,
  };
  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export default ContextProvider;
