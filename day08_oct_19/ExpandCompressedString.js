function ExpandString(str) {
    let res = '';
    for(let i=0; i<str.length; i+= 2) {
        let char = str[i];
        let count = parseInt(str[i+1]);
        res += char.repeat(count);

    }
    return res;

}
console.log(ExpandString("a3b2c1"));