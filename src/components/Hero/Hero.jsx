import Heading from "./Heading";
import Grid from "./Grid";
import Ball from "../Ball";

function Hero() {
  return (
    <div className="hero">
      <Heading />
      <Grid />
      <Ball bgColor="#2e7d32" />
      <Ball bgColor="#EDA215" />
      <Ball bgColor="transparent" />
    </div>
  );
}

export default Hero;
