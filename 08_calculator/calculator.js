function add(x, y) {
  const erg = x + y;
  return erg;
}

function subtract(x, y) {
  const erg = x - y;
  return erg;
}

function sum(arr) {
  let erg = 0;
  arr.forEach(element => {
    erg += element;
  });
  return erg;
}

function multiply(arr) {
  let erg = 1;
  arr.forEach(element => {
    erg *= element
  });
  return erg;
};

function power (x, y) {
  let erg = x;
  for(i = 1; i < y; i++){
    erg *= x;
  }
  return erg;
};

function factorial(x) {
  let erg = 1;
  for(i = x; i > 0; i--){
    erg *= i;
  }
  return erg
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
