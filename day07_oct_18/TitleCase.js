function toTitleCase(str) {
    let words = str.toLowerCase().split(' ');
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() 
    }
    return words.join(' ');
}
console.log(toTitleCase('this is javascript class'));