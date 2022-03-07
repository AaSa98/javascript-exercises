function removeFromArray(arr1) {
    //Umwandeln der an Funktion übergebene Argumente in ein Array
    let args = [...arguments];
    //Erstes Element des args-Arrays löschen, da dies das zu betrachtende Array ist, von dem gelöscht werden soll
    args.shift();
    //Überprüfen aller Elemente von args
    for(const element of args){
        //Wenn Wert aus args in Array arr1 vorkommt
        if(arr1.includes(element)){
            //Index des Elementes in i speichern
           const i = arr1.indexOf(element);
           //Element arr1[i] löschen
           arr1.splice(i, 1);
        }
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
