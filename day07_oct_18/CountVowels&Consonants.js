function countVowelsAndConsonants(str) {
    const letters = str.toLowerCase().replace(/[^a-z]/g, '');
    let vowels = 0;
    let consonants = 0;

    for(const ch of letters) {
        if('aeiou'.includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
    return {vowels, consonants};
}
const result = countVowelsAndConsonants('Hellow World');
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`);