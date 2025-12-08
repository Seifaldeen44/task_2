let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email:");

let nameRegex = /^[A-Za-z\s]+$/;
let ageRegex = /^[1-9][0-9]*$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!nameRegex.test(name)) {
    alert("Please enter a valid name!");
} else if (!ageRegex.test(age)) {
    alert("Please enter a valid age!");
} else if (!emailRegex.test(email)) {
    alert("Please enter a valid email!");
} else {
    let today = new Date();
    alert(`Welcome ${name}! Your info has been recorded.\nToday's date: ${today.toDateString()}`);
}