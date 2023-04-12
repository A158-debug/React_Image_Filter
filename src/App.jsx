import React,{useContext} from "react";
import { Box, Container, Grid } from "@mui/material";
import ImageField from "./components/ImageField";
import FilterTabs from "./components/FilterTabs";
import InstaFilter from "./components/InstaFilter";
import CustomFilter from "./components/CustomFilter";
import { FilterContext } from "./ContextProvider";

const App = () => {
  const {tabFilter} = useContext(FilterContext)
  return (
    <div>
      <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
        <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{fontFamily:'sans-serif'}}>Image Filter</h1>
        </Box>
        <Grid container spacing={10}>
          <ImageField />
          <Grid item xs={12} md={5}>
            <FilterTabs />
            {tabFilter === 'instaFilter' ? <InstaFilter /> : <CustomFilter />}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
