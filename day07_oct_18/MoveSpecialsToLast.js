function moveSpecialCharactersToEnd(str) {
    const letters = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const specialChars = str.toLowerCase().replace(/[a-z0-9]/g, '');
    return letters + specialChars;
}
console.log(moveSpecialCharactersToEnd('hello@#hi&'));