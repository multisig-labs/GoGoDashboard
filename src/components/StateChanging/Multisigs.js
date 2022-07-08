import Rialto from "./Rialto";

import accounts from "../../data/anrAccounts.json";

function getRialtos() {
  const rialtos = [];
  for (var i in accounts) {
    if (i.toUpperCase().includes("RIALTO")) {
      rialtos.push(<Rialto name={i} />);
    }
  }
  return rialtos;
}

function Multisigs() {
  const rialtos = getRialtos();

  return <>{rialtos}</>;
}

export default Multisigs;
