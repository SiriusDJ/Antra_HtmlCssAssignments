// Problem 1
function sumSalaries(obj){
    let sum = 0
    for (let el in obj){
        if(typeof obj[el] == 'number'){
            sum += obj[el];
        }
    }
    return sum;
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

console.log(sumSalaries(salaries));

// Problem 2
function multiplyNumeric(obj){
    let product = 1
    for (let el in obj){
        if(typeof obj[el] == 'number'){
            obj[el] *= 2
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu)
multiplyNumeric(menu)
console.log(menu)

// Problem 3
function checkEmailId(str){
    var a;
    var b;
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) == '@'){
            a = i;
        }
        if (str.charAt(i) == '.'){
            b = i;
        }
    }
    return typeof a == "number" && typeof b =="number" && b - a > 1;
}

let str = "zzq@163.com";
console.log(checkEmailId(str));

// Problem 4
function truncate(str, maxlength){
    if (str.length > maxlength){
        return str.slice(0, maxlength - 1) + "...";
    }
    else{
        return str;
    }
}

var str1 = "What I'd like to tell on this topic is:";
console.log(truncate(str1, 20));

var str2 = "Hi everyone!";
console.log(truncate(str2, 20));

// Problem 5
var array = ["James", "Brennie"];
console.log(array);
array.push("Robert");
console.log(array);
let index = (array.length - 1) / 2;
array[index] ="Calvin";
console.log(array);
array.shift();
console.log(array);
array.splice(0, 0, "Rose");
array.splice(0, 0, "Regal");
console.log(array);