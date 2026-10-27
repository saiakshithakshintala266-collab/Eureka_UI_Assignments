function ValidateParanthesis(str) {
    let BracketMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    let mystack = [];
    for (let i=0; i<str.length; i++) {
        if(str[i] === '(' || str[i] === '{' || str[i] === '[') {
            mystack.push(str[i]);
        }
        else {
            let last = mystack.pop();
            if(str[i] !== BracketMap[last]) {
                return false;
            }
            
        }
    }
    return true;
}

console.log(ValidateParanthesis("({[]}")); // true