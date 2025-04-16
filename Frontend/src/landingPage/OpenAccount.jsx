import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">Open a Zerodha account</h1>
        <p className="mb-4 text-body-secondary">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs fw-bold"
          style={{ width: "18%", margin: "auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default OpenAccount;
