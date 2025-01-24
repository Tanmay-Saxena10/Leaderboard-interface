import axios from "axios";

export const fetchTraderData = async () => {
  const url = "https://api.sheety.co/92686b60f15a8fb7a10a0d36a39b442d/tradingData/sheet1"; 
  try {
    const response = await axios.get(url);
    console.log("Raw API Response:", response.data.sheet1); // Log raw data

    const traders = response.data.sheet1.map(trader => ({
      name: trader.name || "N/A",
      tradingStyle: trader.tradingStyle || "N/A",
      rank: Number(trader.rank) || 0,
      streak: Number(trader.streaks) || 0,
      alerts: Number(trader.alerts) || 0,
      trades: Number(trader.trades) || 0,
      averageGain: Number(trader.avgGain) || 0,
      xScore: Number(trader.xscore) || 0
    }));

    console.log("Processed Traders:", traders);
    return traders;
  } catch (error) {
    console.error("Fetch Error:", error);
    return []; 
  }
};