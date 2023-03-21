// Retrieving data:
let text = localStorage.getItem("testJSON");
console.log(text);
let obj = JSON.parse(text);
console.log(obj);
document.getElementById("demo").innerHTML = `Name: ${obj.name}<br>Age: ${obj.age}<br>City: ${obj.city}<br>`;
