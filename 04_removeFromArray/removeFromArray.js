function removeFromArray(arr1, ele) {
    let args = [...arguments];
    args.shift();
    for(const element of args){
        if(arr1.includes(element)){
           const i = arr1.indexOf(element);
           arr1.splice(i, 1);
        }
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
