function largestWord(str) {
    let words = str.split(" ");
    let largest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > largest.length) {
            largest = words[i];
        }
    }
    return largest;
}

let input = "this is a javascript string demo";
console.log(largestWord(input));