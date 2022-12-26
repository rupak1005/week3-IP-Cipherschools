let type = document.querySelector("header");
console.log(type);

let classSelector = document.querySelector("header-content");
console.log(classSelector);

let idSelector = document.querySelector("#header");
console.log(idSelector);

let decendent = document.querySelector(".header-content");
console.log(decendent);

let All = document.querySelector("main p");
console.log(All);

let bg = document
  .querySelector("main p")
  .forEach((item) => (item.style.backgroundColor = "blue"));

let color = document
  .querySelector("main p:last-child")
  .forEach((item) => (item.style.backgroundColor = "White"));

// Older Methods

let oldtype = document.getElementsByTagName("header");
console.log(oldclass);

let oldclass = document.getElementsByClassName("header-content");
console.log(oldclass);

let oldid = document.getElementsById("header");
console.log(oldid);
