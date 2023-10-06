function numInStr(liste) {
    const chiffres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const result = [];

    liste.forEach(element => {
        for (i = 0; i < element.length; i++) {
            if (chiffres.includes(element[i])) {
                result.push(element);
                break; 
            }
        }
    });

    return result;
}

console.log(numInStr(["1a","a","2b","b"]));
console.log(numInStr(["abc","abc10"]));
console.log(numInStr(["abc","ab10c","a10bc","bcd"])); 
