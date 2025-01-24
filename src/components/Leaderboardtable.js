import React, { useState } from "react";
import { Pagination } from "@mui/material";

const LeaderboardTable = ({ traders }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10; // Number of rows to display per page

  const handleChangePage = (event, value) => {
    setPage(value);
  };
//this function will change the page number when the user clicks on the pagination buttons

  const displayedTraders = traders.slice((page - 1) * rowsPerPage, page * rowsPerPage);
//this will display the traders on the page

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Trading Style</th>
            <th>Streak</th>
            <th>Alerts</th>
            <th>Trades</th>
            <th>Average Gain</th>
            <th>Xscore</th>
            <th>Trophies</th>
          </tr>
        </thead>
        <tbody>
          {/*here the trader's information is being displayed in a table format*/}
        {displayedTraders.map((trader, index) => (
            <tr key={index}>
              <td>{trader.rank || index + 1}</td> {/*this will display the rank of the trader*/}
              <td>{trader.name || 'Unknown'}</td>
              <td>{trader.tradingStyle || 'N/A'}</td>
              <td>{trader.streak || 0}</td>
              <td>{trader.alerts || 0}</td>
              <td>{trader.trades || 0}</td>
              <td>{trader.averageGain ? `${trader.averageGain}%` : 'N/A'}</td>
              <td>{trader.xScore || 0}</td>
              <td>{Array.isArray(trader.trophies) ? trader.trophies.join(", ") : "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*this will display the pagination buttons means the user can click on the buttons to go to the next page*/}
      <Pagination
        count={Math.ceil(traders.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default LeaderboardTable;
