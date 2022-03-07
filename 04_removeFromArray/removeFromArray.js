function removeFromArray(arr1, ele) {
    for(const element of arr1){
        if(element == ele){
           const i = arr1.indexOf(element);
           arr1.splice(i, 1);
        }
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
