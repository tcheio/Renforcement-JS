function sentenceChercher(phrase, motRecherche) {
    return phrase.split('.').filter(phrase => {
        const mots = phrase.split(' ');
        return mots.some(mot => mot.toLowerCase() === motRecherche.toLowerCase());
    }).join('. ');
}

const str = "I have a cat. I have a mat. Things are going swell";

console.log(sentenceChercher(str, "cat"));
console.log(sentenceChercher(str, "MAT"));
console.log(sentenceChercher(str, "things"));
console.log(sentenceChercher(str, "flat"));
