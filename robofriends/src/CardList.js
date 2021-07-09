import React from "react";

import Card from "./Card";

function CardList({ robots }) {
  const cardComponent = robots.map(function (robot, i) {
    return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
  });
  return <div>{cardComponent}</div>;
}

export default CardList;
