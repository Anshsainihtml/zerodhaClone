import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted fs-5 mt-3">List of all charges and taxes </h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            style={{ width: "15rem" }}
          />
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ width: "15rem" }}
          />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            style={{ width: "15rem" }}
          />
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
