// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
console.log(myObj);
const myJSON = JSON.stringify(myObj);
console.log(myJSON);
localStorage.setItem("testJSON", myJSON);
