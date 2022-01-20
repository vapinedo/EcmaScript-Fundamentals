/*------------------------------- 
    1. Parametros por defecto
---------------------------------*/
function newFunction(name = "John", age = 20, country = "USA") {
    console.log(name, age, country);
}
newFunction();
newFunction("James", 20, "Mexico");

/*------------------------------- 
    2. Template literals
---------------------------------*/
let hello = "Hello";
let world = "world";
let helloword = `${hello} ${world}`;
console.log(helloword);

/*------------------------------- 
    3. Destructuring
---------------------------------*/
let person = {
    "name": "Davi",
    "age": 20,
    "country": "USA"
};
console.log(person.name, person.age);

let { name, country } = person;
console.log(name, country);

/*------------------------------- 
    4. Spread operator
---------------------------------*/
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria",  "Jessica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);

/*------------------------------- 
    5. Let, Const
---------------------------------*/
const prueba = () => { 
    var globalVar = "global";
}

{
    let localVar = "local";
}

console.log(globalVar);

/*------------------------------- 
    6. Object property enhacements
---------------------------------*/
let name = "Valp";
let age = 22;

obj = { name, age };
console.log(obj);

/*------------------------------- 
    7. Arrow functions
---------------------------------*/
const names = [
    { name: "Rye", age: 17 },
    { name: "Valp", age: 22 }
];

let namesArr = names.map(function(item) {
    console.log(item.name)
});

let namesArr2 = names.map(person => {
    console.log(person.name);
})

/*------------------------------- 
    8. Promises
---------------------------------*/
const helloPromise = () => {
    return new Promise((res, rej) => {
        if (false) {
            res("Hello!");
        } else {
            rej("Bye");
        }
    });
};

helloPromise()
    .then(console.log)
    .then(console.log("plus"))
    .catch(console.log)

/*------------------------------- 
    9. Clases
---------------------------------*/
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
} 

const calc = new Calculator();
console.log(calc.sum(2,8));

/*------------------------------- 
    10. Modules
---------------------------------*/
import { hello } from "./module";
hello();


/*------------------------------- 
    11. Generators
---------------------------------*/
function* helloWorld() {
    if(true) {
        yield "hello, ";
    }

    if (true) {
        yield "world";
    }
}

const helloGenerator = helloWorld();

console.log(helloGenerator.next().value);
console.log(helloGenerator.next().value);
console.log(helloGenerator.next().value);
