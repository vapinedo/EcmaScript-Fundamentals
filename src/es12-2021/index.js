/*--------------------------------------
    1. Replace All
--------------------------------------*/
const string = "Pelé es el mejor futbolista de la historia, Pelé es un crack";
const stringReplaced = string.replace("Pelé", "Cristiano Ronaldo");
console.log(stringReplaced);

const stringReplaceAll = string.replaceAll("Pelé", "Cristiano Ronaldo");
console.log(stringReplaceAll);


/*--------------------------------------
    2. Private Class Methods
--------------------------------------*/
class Car {
    #drive() {
        console.log("Driving now!");
    }

    get #destroy() {
        console.log("Self destroy!!");
    }
}

const audi = new Car();
audi.drive();

/*--------------------------------------
    3. Promise Any
--------------------------------------*/
const promiseOne = new Promise((res, rej) => rej("Promise One rejected"));
const promiseTwo = new Promise((res, rej) => res("Promise Two resolved"));
const promiseThree = new Promise((res, rej) => res("Promise Three resolved"));

Promise.any([promiseOne, promiseTwo, promiseThree])
    .then(console.log);

/*--------------------------------------
    4. WithRef
--------------------------------------*/    
class store {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
}

/*--------------------------------------
    5. New 3 logical operators
--------------------------------------*/    
let isTrue = true;
console.log(isTrue &&= "new value");

let isTrue2 = true;
console.log(isTrue2 ||= "new value");

let isTrue3 = undefined;
console.log(isTrue3 ??= "new value");