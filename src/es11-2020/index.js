/*--------------------------------------
    1. Dynamic import ( Lazy loading )
--------------------------------------*/
const button = document.getElementById("btn");
const target = document.getElementsByTagName("main");

button.addEventListener("click", async () => {
    const module = await import("./sayHello.js");
    module.hello(target);
});


/*--------------------------------------
    2. BigInt Method
--------------------------------------*/
const bigNumber = 900719925474091n;
const anotherBigNumber = BigInt(900719925474091);

console.log(bigNumber);
console.log(anotherBigNumber);

/*--------------------------------------
    3. Promise allSettled
--------------------------------------*/
const promiseOne = new Promise((res, rej) => rej("Promise one rejected"));
const promiseTwo = new Promise((res, rej) => res("Promise Two resolved"));
const promiseThree = new Promise((res, rej) => res("Promise Three resolved"));

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then(console.log);

/*--------------------------------------
    4. globalThis
--------------------------------------*/
console.log(window);
console.log(globalThis);

/*--------------------------------------
    5. Nullish Coalescing Operator
--------------------------------------*/
const nickName = "John Carter";
const realName = nickName ?? "default realName";
console.log(realName);


/*--------------------------------------
    6. Optional Chaining
--------------------------------------*/
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log("Email")
} else {
    console.log("No data");
}