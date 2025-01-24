import React from "react";
import "./TopTraders.css"; // Import the CSS file for styling


const TopTraders = ({ traders }) => {
  console.log("Traders Data:", traders);

  return (
    <div className="top-traders-container">
      {traders.map((trader, index) => {
        // Match the trader name to specific avatar with the images in the public folder
        console.log("Trader Name:", trader.name);
        const avatar = 
        trader.name === 'Charlie Herwitz' ? '/t1.jpg' : 
        trader.name === 'Sebastian Z.' ? '/t2.jpg' : 
        trader.name === 'Chloe F.' ? '/t3.jpg' : 
        '/default.jpg';   // Default avatar if no match

            console.log("Avatar Path:", avatar); 
        return (
          <div key={index} className="top-trader-card">
            <div className="avatar-container">
              <img
                src={avatar} // Trader's avatar
                alt={`${trader.name}'s avatar`} 
                className="avatar"
              />
            </div>

            {/* Display the trader's information*/}
            <div className="trader-info">
              <h3>{trader.name}</h3> 
              <p>Trading Style: {trader.tradingStyle}</p> 
              <p>Xscore: {trader.xScore}</p>
              <p>Avg Gain: {trader.averageGain}%</p> 
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopTraders;