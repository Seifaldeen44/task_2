let str = prompt('Enter the string');
let flag = prompt('If you want case sensitive, press Enter');

let mid = Math.floor(str.length / 2);
let firstHalf = str.slice(0, mid);
let secondHalf = str.slice(str.length % 2 === 0 ? mid : mid + 1);
let reversedSecondHalf = secondHalf.split("").reverse().join("");

let pattern = new RegExp(reversedSecondHalf, flag ? "g" : "gi");


firstHalf.match(pattern) 
    ? document.writeln("Palindrome") 
    : document.writeln("Not palindrome");