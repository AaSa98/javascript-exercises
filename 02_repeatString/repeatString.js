function repeatString(word, num){
    let repString = "";
    if(num < 0){
        repString = "ERROR";
        return repString;
    }
    for(let i = 0; i < num; i++){
        repString += word;
    }
    return repString;
};

// Do not edit below this line
module.exports = repeatString;
