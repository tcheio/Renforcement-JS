function expandedForm(nb) {
    let nbStr = nb.toString(); 
    let taille = nbStr.length;
    let result = "";

    for (let i = 0; i < taille; i++) {
        let chiffre = parseInt(nbStr[i]); 
        if (chiffre !== 0) {
            result += chiffre * Math.pow(10, taille - i - 1) + " + ";
        }
    }

    result = result.slice(0, -3); 
    return result;
}


console.log(expandedForm(70304));
console.log(expandedForm(1037903));
console.log(expandedForm(802539));