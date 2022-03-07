function sumAll(x, y){
    let sum = 0;
    if(x < y){
        for(let i = x; i <= y; i++){
            sum += i;
        }
    }
    else if(y < x){
        for(let i = y; i <= x; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
