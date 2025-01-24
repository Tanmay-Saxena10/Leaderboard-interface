import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import { fetchTraderData } from "./api";
import TopTraders from "./components/Toptraders";
import KeyMetrics from "./components/Keymetrics";
import LeaderboardTable from "./components/Leaderboardtable";
import "./components/TopTraders.css";

function App() {
  const [traders, setTraders] = useState([]);
  const [loading, setLoading] = useState(true);
//this will set the state of the traders and loading to true (STATE MANAGEMENT)


  useEffect(() => {
    const getData = async () => {
      const result = await fetchTraderData();
      console.log("Fetched Trader Data:", result);
      setTraders(result);
      setLoading(false);
    };

    getData();
  }, []);

  // Filter and sort the top 3 traders by Xscore
  const topTraders = useMemo(() => {
    return [...traders]
      .sort((a, b) => {
        // First sort by xScore in descending order
      if (b.xScore !== a.xScore) {
        return b.xScore - a.xScore;
      }
      // If xScores are equal, sort by averageGain in descending order
      return b.averageGain - a.averageGain;
    })
      .slice(0, 3);
  }, [traders]);

  return (
    <div>
      <h1>Leader Board</h1>
{/* loading means that the data is being fetched from the API ? if yes then loading will be true and the message "Loading Top Traders..." will be displayed*/}
      <div className="top-traders">
        {loading ? (
          <p>Loading Top Traders...</p>
        ) : (
          <TopTraders traders={topTraders} />
        )}
      </div>

      <div className="key-metrics">
        <KeyMetrics traders={traders} />
      </div>
      <div className="table-container">
        <LeaderboardTable traders={traders} />
      </div>
    </div>
  );
}

export default App;