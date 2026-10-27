function GenerateRoman(num) {
 let roman = '';
 let romanConstMap = {
    M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1
 }
 while(num>0) {
    for(let i in romanConstMap) {
        if(num >=romanConstMap[i]) {
            roman += i;
            num -= romanConstMap[i];
        }
    }
 }
return roman;
}
console.log(GenerateRoman(999)); //CM , XC, IX
