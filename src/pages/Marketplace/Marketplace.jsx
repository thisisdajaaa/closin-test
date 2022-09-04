import React from "react";
import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";
import { Button } from "../../components/Button";
import { MarketItem } from "../../components/MarketItem";
import { marketplaceData } from "./data";
import classes from "./Marketplace.module.css";

const Marketplace = () => {
  return (
    <section className={classes.marketplace}>
      <div className={classes.pageHeader}>
        <h4 className={classes.marketplaceTitle}>Marketplace</h4>

        <Button
          variation="icon"
          title="Filter"
          icon={<FilterIcon />}
          onClick={() => {}}
        />
      </div>

      <div className={classes.marketplaceItems}>
        {marketplaceData.map((item) => (
          <MarketItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export { Marketplace };
