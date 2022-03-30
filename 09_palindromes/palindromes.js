function palindromes(str) {
  let helpstr = str.toLowerCase();
  helpstr = helpstr.replace(/\s/g, "");
  helpstr = helpstr.replace(/[.,!?]/g, "");
  const helparr = helpstr.split("");
  //notwendig, weil .reverse() destructive ist und das eigentliche Array verändert
  const helparrRev = [...helparr].reverse();
  const str1 = helparr.join("");
  const str2 = helparrRev.join("");
  return str1 == str2;
}

// Do not edit below this line
module.exports = palindromes;
