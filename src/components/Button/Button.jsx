import React from "react";
import { Base } from "./Base";
import { WithIcon } from "./WithIcon";
import { WithLink } from "./WithLink";

const Button = ({ variation = "default", title, onClick, href, icon }) => {
  switch (variation) {
    case "icon":
      return <WithIcon icon={icon} onClick={onClick} title={title} />;

    case "link":
      return <WithLink href={href} title={title} />;

    default:
      return <Base title={title} onClick={onClick} />;
  }
};

export { Button };
