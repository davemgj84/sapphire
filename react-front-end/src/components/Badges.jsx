import React from "react";
import Badge from "./Badge";

//@ todo : maybe move sapphires to their own component
const Badges = () => {
  return (
    <div className="badge-row">
      <Badge image={"01_sapphire_shard"} />
      <Badge image={"02_sapphire_shard"} />
      <Badge image={"03_sapphire_shard"} />
      <Badge image={"burger"} />
      <Badge image={"narwhal"} />
      <Badge image={"pusheen"} />
      <Badge image={"rock"} />
      <Badge image={"ruby"} />
    </div>
  );
};

export default Badges;
