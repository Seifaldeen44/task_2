let str = prompt("Enter a string:");
let specifiedCH = prompt('inter the char you want to count');
let flag = prompt("if you want it to be case insensitive press any button then enter")
let namePattern = new RegExp(specifiedCH,flag?"gi":"g")
let finalStr = str.match(namePattern)
document.writeln("the number of letter is "+finalStr.length)

