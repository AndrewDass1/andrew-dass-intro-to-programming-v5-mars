

let createFooter = document.createElement('footer');

createFooter.innerHTML = "Hello";

console.log(createFooter.innerHTML);

// document.body.append(footerTag);

let today = new Date();

let thisYear = today.getFullYear();
console.log(thisYear);

let footer = document.getElementById("footer");

// 

let copyright = document.createElement("p");
console.log(copyright);

copyright.innerHTML = "Andrew Dass " + thisYear;

document.body.append(copyright.innerHTML);
