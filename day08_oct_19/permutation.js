function printPermutations(str, res = '') {
    if(!str.length) {
        console.log(res);
    }
    for(let i=0; i<str.length; i++) {
        let currentChar = str[i];
        let remainingChars = str.substr(0,i) + str.substr(i+1);
        printPermutations(remainingChars, res + currentChar);
    }
}
console.log(printPermutations('abc'));
