export function listNodes(accounts) {
  const nodes = [];
  for (var i in accounts) {
    if (i.toUpperCase().includes("NODEOP")) {
      nodes.push(i);
    }
  }
  return nodes;
}
