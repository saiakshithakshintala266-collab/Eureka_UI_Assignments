input = [10,20,30,40,50,10,30,50];

let new_arr = input.reduce((obj,ele) => {
    if(obj[ele]){
        obj[ele] = obj[ele] + 1;
    }
    else {
        obj[ele] = 1;
    }
    return obj;

}, {})

console.log("The new array with occurence of each number is : ", new_arr);