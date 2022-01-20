/*------------------------ 
    1. Object.entries
------------------------*/
const data1 = {
    frontend: "Valp",
    backend: "Jack",
    designer: "Hanna"
};

const entries = Object.entries(data1);
console.log(entries);

/*----------------------
    2. Object.values
----------------------*/
const data2 = {
    frontend: "Valp",
    backend: "Jack",
    designer: "Hanna"
};

const values = Object.values(data2);
console.log(values);

/*----------------------
    2. Padding
----------------------*/
const name1 = "John";
console.log(name1.padStart(7, "Hi "));

const name2 = "John";
console.log(name2.padEnd(11, " Connor"));

/*----------------------
    3. Async & Await
----------------------*/
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) 
            ? setTimeout(() => resolve("Hello world"), 1500)
            : reject(new Error("Promise error"))
    });
};

const getHelloWorld = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

getHelloWorld();

const getHelloWorldAsync = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (err) { 
        console.log(err);
    }
};

getHelloWorldAsync();