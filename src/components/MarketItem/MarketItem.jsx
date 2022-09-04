import React from "react";
import { Button } from "../Button";
import { ReactComponent as InfoIcon } from "../../assets/svg/info.svg";
import house from "../../assets/svg/house.svg";
import classes from "./MarketItem.module.css";

const MarketItem = ({ item }) => {
  return (
    <div className={classes.marketplaceItem} key={item.id}>
      <div className={classes.marketplaceItemHeader}>
        <div className={classes.marketplaceItemStatus}>
          <span>{item.status}</span>
        </div>

        <img src={house} alt="house" />
      </div>

      <div className={classes.marketplaceItemContent}>
        <h5>{item.name}</h5>
        <p className={classes.itemAddress}>{item.address}</p>

        <div className={classes.marketplaceItemProgress}>
          <progress id="file" value={item.progress} max="100">
            {item.progress}%
          </progress>

          <div className={classes.progressDetails}>
            <p>Progress: </p>
            <p>{item.progress}/100</p>
          </div>
        </div>

        <div className={classes.marketplaceItemEstimates}>
          <div className={classes.estimateWithBorder}>
            <div className={classes.estimateTitle}>
              <p>Projected IRR</p>
              <InfoIcon />
            </div>

            <h5>{item.projectedIrr}%</h5>
          </div>

          <div className={classes.estimate}>
            <div className={classes.estimateTitle}>
              <p>Cash Payout</p>
              <InfoIcon />
            </div>

            <h5>{item.cashPayout}%</h5>
          </div>
        </div>
      </div>

      <div className={classes.marketplaceItemFooter}>
        <Button title="Purchase" onClick={() => {}} />

        <Button variation="link" href="#" title="View Details" />
      </div>
    </div>
  );
};

export { MarketItem };
