function PrintOccurenceOfChar(str) {
    const lowerstr = str.toLowerCase().replaceAll(' ','');
    let visited = new Map(); //Creating a map to store visited characters
    let max = 0;
    let maxchar = '';
    for(let i of lowerstr)
    {
        if(visited.has(i))
        {
            visited.set(i, visited.get(i) + 1);
        }
        else 
        {
            visited.set(i, 1);
        }
    }
    for(let [key, value] of visited)
    {
        if(value>max)
        {
            max = value;
            maxchar = key;
        }
    }
    return maxchar;
}

console.log(PrintOccurenceOfChar("Helloooo World"));