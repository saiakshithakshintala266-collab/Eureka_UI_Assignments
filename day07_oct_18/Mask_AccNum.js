function maskAccountNumber(str) {
    return str.slice(0,2) + '*'.repeat(str.length - 4) + str.slice(-2);

}
console.log(maskAccountNumber('123456789987'));