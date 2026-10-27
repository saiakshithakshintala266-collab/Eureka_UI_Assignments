function reverseWords(str) {
    return str.trim().split(' ').reverse().join(' ');
}
console.log(reverseWords('This is javascript class'));