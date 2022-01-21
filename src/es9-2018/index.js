/*---------------------------------------------
    1. Spread Operator Enhancements
----------------------------------------------*/
const obj = {
    name: "Valp",
    videoGame: "COD Mobile",
    favoriteGun: "Type 25"
};

let { name, ...all } = obj;
console.log(name, all);

const obj2 = {
    name: "Luis",
    videoGame: "COD Mobile",
    favoriteGun: "DLQ 33 Holidays"
};

const obj3 = {
    ...obj2,
    country: "Mexico"
};

console.log(obj3);

/*---------------------
    2. Promise finally
----------------------*/
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? resolve("Hello world")
            : reject(new Error("Promise error"))
    });
};

helloPromise()
    .then(console.log)
    .catch(console.log)
    .finally(() => console.log("Promise has been finish"));

/*----------------------------------------
    3. Regular expressions enhancements
-----------------------------------------*/    
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2021-05-21");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);