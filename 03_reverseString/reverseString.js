function reverseString(stringNormal) {
    let arr_stringReverse = stringNormal.split("");
    arr_stringReverse = arr_stringReverse.reverse();
    const stringReverse = arr_stringReverse.join("");
    return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
