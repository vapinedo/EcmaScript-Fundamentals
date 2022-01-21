/*---------------------
    1. Array Flat
----------------------*/
let array = [1,2,3, [4,5,6, [7,8,9]]];
console.log(array.flat(2));

/*---------------------
    2. Array FlatMap
----------------------*/
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value*2]));

/*--------------------------
    3. TrimStart method
---------------------------*/
let hello = "     hello world";
console.log(hello.trimStart());

/*--------------------------
    4. TrimEnd method
---------------------------*/
let hello2 = "hello world     ";
console.log(hello2.trimEnd());

/*--------------------------
    5. Optional catch binding
---------------------------*/
try {

} catch {
    error
}

/*--------------------------
    6. fromEntries
---------------------------*/
let entries = [
    ["sniper", "Valp"],
    ["support", "Luis"],
    ["igl", "Bammix"],
    ["slayer", "Worman"]
];
console.log(Object.fromEntries(entries));

/*--------------------------
    7. Symbol description
---------------------------*/
let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);