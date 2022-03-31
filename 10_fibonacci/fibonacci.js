function fibonacci(nmr) {
  //einfachste Version ist fib(1) = 1 & fib(2) = 1
  nmr = parseInt(nmr)
  if (nmr < 0) {
    return "OOPS";
  } else if (nmr == 1 || nmr == 2) {
    return 1;
  } else {
    return fibonacci(nmr - 1) + fibonacci(nmr - 2);
  }
}

// Do not edit below this line
module.exports = fibonacci;
