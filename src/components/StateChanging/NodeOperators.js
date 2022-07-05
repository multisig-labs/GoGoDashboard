import NodeOp from "./NodeOp";

import accounts from "../../data/anrAccounts.json";

function getNodeOps() {
  const nodeOps = [];
  for (var i in accounts) {
    if (i.toUpperCase().includes("NODEOP")) {
      nodeOps.push(<NodeOp name={i} />);
      console.log(i);
      console.log(nodeOps.length)
    }
  }
  return nodeOps;
}

function NodeOperators() {
  const nodeOps = getNodeOps();

  return(<>{nodeOps}</>);
}

export default NodeOperators;