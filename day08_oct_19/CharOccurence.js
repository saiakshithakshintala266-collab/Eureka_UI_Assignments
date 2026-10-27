function PrintOccurenceOfChar(str) {
    const lowerstr = str.toLowerCase().replaceAll(' ','');
    let visited = new Map(); //Creating a map to store visited characters
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
    return visited;
}

console.log(PrintOccurenceOfChar("Hello World"));