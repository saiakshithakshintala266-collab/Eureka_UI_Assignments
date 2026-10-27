function firstUNQChar(str) {
    for (c of str)
    {
        if(str.indexOf(c) === str.lastIndexOf(c)) {
            return c;
        }
    }
    return 'No non-repeated characters found';
}
console.log(firstUNQChar('entertainment'));