import NodeOp from "./NodeOp";

import accounts from "../../data/anrAccounts.json";

function getNodeOps(accounts) {
  const nodeOps = [];
  for (var i in accounts) {
    if (i.toUpperCase().includes("NODEOP") && (accounts[i].addr).substring(0,2) === "0x") {
      nodeOps.push(<NodeOp name={i} />);
    }
  }
  return nodeOps;
}

function NodeOperators() {
  const nodeOps = getNodeOps(accounts);

  return <>{nodeOps}</>;
}

export default NodeOperators;
