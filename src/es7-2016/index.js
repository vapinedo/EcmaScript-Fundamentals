/*------------------------------- 
    1. Includes Method
---------------------------------*/
const numbersArr = ["Maria", "LAURA", "CeSar"];

if (numbersArr.includes("LaURA")) {
    console.log("yes");
} else {
    console.log("no");
}

const text = "Maria Lava la ropa";

if (text.toLowerCase().includes("opa")) {
    console.log("yes");
} else {
    console.log("no");
}


/*------------------------------- 
    2. Potentiation operator
---------------------------------*/
let base = 2;
let exponent = 4;
let result = base ** exponent;

console.log(result);