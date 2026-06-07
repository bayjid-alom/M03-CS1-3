// Array - index base [index start from 0]

let numbers = [10, 20, 30, 40, 50, 60];
console.log(numbers)

// Element access
console.log("Index 5 Value :", numbers[5])

// count elements (How many elements in array. To find size of an array.)
console.log("Length of the array is :", numbers)


// added last
numbers.push(100, 110)
console.log(numbers)

// remove last item
numbers.pop()
numbers.pop()
console.log(numbers)

// added first
numbers.unshift(500)
numbers.unshift(400)
console.log(numbers)

// remove from first
numbers.shift()
numbers.shift()
console.log(numbers)




// Loop iterate on array

let numbers_2 = [500, 100, 150, 200];

for (number of numbers_2) {
    console.log(number)
}






let players = ["Shakib", "Mustafiz", "Masrafee", "Taskin"];
console.log("Players :", players)

// includes
console.log(players.includes("Mustafiz"))

// indexOf
console.log("Taskin's Index :", players.indexOf("Taskin"))

// index
console.log("Index 0 of Players :", players[0])

// is it array or not
console.log("Array Check :", Array.isArray(players))

// reverse 
console.log(players.reverse())

// join: to convert a string
let players_string = players.join(" - ")
console.log(players_string)



// trim()   (remove white space from only first & last)
let string_1 = "Bayjid Alom";
let string_2 = "bayjid alom";

console.log(string_1[0])
console.log(string_1.toLowerCase().trim() === string_2.toLowerCase().trim())


// slice()
let bd = "I love Bangladesh.";
console.log("From index 2 to last :", bd.slice(2))

console.log(bd.slice(2, 6))


// includes()
console.log(bd.includes("Bangladesh"))


// concat()
let line_1 = "Hello World!";
let line_2 = "Welcome to Javascript."

console.log(line_1.concat(" ").concat(line_2))


// replace()   - to replace specific portion
let a_line = "I am living in Dhaka."
console.log(a_line.replace("Dhaka", "Mymensingh"))


// split()*** - very useful for reverse a string
// string to array --> array to reverse()

let line_3 = "We love Programming";
let strArr = line_3.split(" ")
console.log(strArr)
console.log(strArr.reverse())

let reverse_str = strArr.join(" ");
console.log(reverse_str)

// shortcut
let short_cut = line_3.split(" ").reverse().join(" ");
console.log("Shortcut :", short_cut)


// count a specific letter
let count_letters = "We love to travel and watch movie.";
let tCount = 0;

for (let i = 0; i < count_letters.length; i++) {
    let letter = count_letters[i]
    if (letter.toLowerCase() == "t") {
        // tCount = tCount + 1;
        tCount++;
    }
}

console.log("T available in", tCount, "times.")