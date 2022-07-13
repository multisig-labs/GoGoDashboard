import accounts from "../../../data/anrAccounts.json"
// Formatting tools
export function unixTimeConversion(unixTimestamp) {
  if (unixTimestamp === "0") {
    return "-";
  }
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  return humanDateFormat;
}

export function checkNull(item) {
  if (item !== undefined) {
    return item;
  } else {
    return 0;
  }
}

export function formatAddr(addr) {
  for (var n in accounts) {
    if (addr === accounts[n].addr) {
      return n;
    }
  }
  return addr.substring(0, 6) + ".." + addr.substring(addr.length - 4);
}
