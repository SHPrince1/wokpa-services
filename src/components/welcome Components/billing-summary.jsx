import React from "react";
import Style from "../../style/billing.module.css";

const BillingSummary = () => {
  return (
    <div>
    <div className={Style.BillParentDiv}>
        <div className={Style.summary}>
          <div className={Style.camp}>
            <h4>CAMPAIGN SUMMARY</h4>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className={Style.btnDiv}>
            <button>April</button>
            <button>April</button>
            <button>April</button>
            <button>April</button>
            <button>April</button>
            <button>April</button>
          </div>
        </div>

        <div className={Style.balanceDiv}>
          <div className={Style.balance}>
            <p>Amount Spent</p>
            <h3>N 0.00</h3>
          </div>
          <div className={Style.balance}>
            <p>Amount Spent</p>
            <h3>N 0.00</h3>
            <div> <h4>+ Add funds</h4></div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BillingSummary;
