import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function KeyMetrics({ traders = [] }) {
  // Find traders with most tips, most trades (active), and longest streak

  const mostTipsTrader = traders.reduce((max, trader) => 
    (trader.alerts > (max.alerts || 0) ? trader : max), {});
  //this means that the trader with the most tips will be displayed
  
  const mostActiveTrader = traders.reduce((max, trader) => 
    (trader.trades > (max.trades || 0) ? trader : max), {});
  //this means that the trader with the most active trades will be displayed

  const longestStreakTrader = traders.reduce((max, trader) => 
    (trader.streak > (max.streak || 0) ? trader : max), {});
//this means that the trader with the longest streak will be displayed


  return (
    <div>
      <h1>Key Metrics</h1>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4">Most Tips Given</Typography>
              <Typography variant="h6">
                Trader: {mostTipsTrader.name || 'N/A'}
                <br />
                Alerts: {mostTipsTrader.alerts || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/*Card for Most Active Trader*/}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4">Most Active</Typography>
              <Typography variant="h6">
                Trader: {mostActiveTrader.name || 'N/A'}
                <br />
                Trades: {mostActiveTrader.trades || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card for Longest Streak */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4">Longest Streak</Typography>
              <Typography variant="h6">
                Trader: {longestStreakTrader.name || 'N/A'}
                <br />
                Streak: {longestStreakTrader.streak || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

         {/* Placeholder Card for Rank Change */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="custom-card">
            <CardContent>
              <Typography variant="h4">Rank Change</Typography>
              <Typography variant="h6">Change: +3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default KeyMetrics;