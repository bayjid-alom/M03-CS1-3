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








