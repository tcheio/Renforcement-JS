function sentenceChercher(phrase, motRecherche) {
    let phrases = phrase.split("."); 
    let resultats = [];

    phrases.forEach(phrase => {
        let mots = phrase.split(" "); 

        mots.forEach(mot => {
            if (mot.toLowerCase() === motRecherche.toLowerCase()) { 
                resultats.push(phrase.trim() + '.'); 
            }
        });
    });

    return resultats.join(' '); 
}

const str = "I have a cat. I have a mat. Things are going swell";

console.log(sentenceChercher(str, "cat"));
console.log(sentenceChercher(str, "MAT"));
console.log(sentenceChercher(str, "things"));
console.log(sentenceChercher(str, "flat"));
