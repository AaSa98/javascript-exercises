function ftoc(fTemp){
  let cTemp = (fTemp-32)*(5/9);
  cTemp = Math.round(cTemp * 10)/10;
  return cTemp;
};

function ctof(cTemp){
  let fTemp = cTemp*(9/5)+32;
  fTemp = Math.round(fTemp * 10)/10;
  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
