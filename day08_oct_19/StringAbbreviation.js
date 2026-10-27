function AbbreviateString(str) {
    const words = str.split(' ');
    let result = '';
    let count = 1;
    for(let i of words) {
        if(count > 2) {
            break;
        }
        result += i.charAt(0).toUpperCase() + '.';  
        count++;
    }
    return result + words[words.length - 1].charAt(0).toUpperCase() + words[words.length -1].slice(1);

}

console.log(AbbreviateString('Rabindra Nath Tagore'));
