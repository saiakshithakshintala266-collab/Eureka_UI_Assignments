function removeSpecialCharacters(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}
console.log(removeSpecialCharacters('hello@#hi&'));