import { Grid, Box } from "@mui/material";
const GridUI = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={1}>
      <Grid item xs={6} sm={12}>
        <Box p={2} bgcolor={"primary.light"}>
          Item 1
        </Box>
      </Grid>
      <Grid item xs={6} sm={12}>
        <Box p={2} bgcolor={"primary.light"}>
          Item 2
        </Box>
      </Grid>
      <Grid item xs={6} sm={12}>
        <Box p={2} bgcolor={"primary.light"}>
          Item 3
        </Box>
      </Grid>
      <Grid item xs={6} sm={12}>
        <Box p={2} bgcolor={"primary.light"}>
          Item 4
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridUI;
