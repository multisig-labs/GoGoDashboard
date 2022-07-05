import LiquidStaker from "./LiquidStaker";

import accounts from "../../data/anrAccounts.json";

function getStakers() {
  const stakers = [];
  for (var i in accounts) {
    if (!(i.toUpperCase().includes("DEPLOYER") || i.toUpperCase().includes("REWARDER") || i.toUpperCase().includes("NODEOP") || i.toUpperCase().includes("RIALTO"))) {
      stakers.push(<LiquidStaker name={i} />);
    }
  }
  return stakers;
}

function LiquidStakers() {
  const stakers = getStakers();

  return(<>{stakers}</>);
}

export default LiquidStakers;
