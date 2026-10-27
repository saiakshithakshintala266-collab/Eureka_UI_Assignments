function Roman2Int(str) {
  let num = 0;
  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (let i = 0; i < str.length; i++) {
    if (romanMap[str[i]] < romanMap[str[i + 1]]) // If the current roman number is less than upcoming roman number then it means we need to subtract the current roman number from the total.
    {
      num -= romanMap[str[i]];
    } else // If the current roman number is greater than or equal to then we need to add the current roman number to the total.
    {
      num += romanMap[str[i]];
    }
  }
  return num; 
}

console.log(Roman2Int("CMIII"));
