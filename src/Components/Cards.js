import React from "react";

import {
  Card,
  
  Grid,
  
  CardContent,
  Typography,
  
} from "@material-ui/core";

const Cards = ({data:{confirmed,recoverd,deaths,lastUpdate}}) => {
  
    if (!confirmed) {
        return 'Loading...'
    }
  
    
  return (
    <Card className="container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
                      <Typography variant="h5">{ confirmed.value}</Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="body2">
              Number of active cases of Covid
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Rcovered
            </Typography>
            <Typography variant="h5"></Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="body2">
              Number of active cases of Covid
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{ deaths.value}</Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="body2">
              Number of active cases of Covid
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Cards;
