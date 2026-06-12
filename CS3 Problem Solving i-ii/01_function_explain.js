// ## Find smallest value in an array ❗

function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (const number of numbers) {
        if (number < smallest) {
            smallest = number;
        }
    }
    return smallest;
}

const numbers = [10, 20, 30, 40, 50, 60];
const smallest = smallestNumber(numbers);
console.log("Smallest number is :", smallest);



// Find largest name in an array ❗❗
function largest_name(names) {

    let largest = names[0]
    for (const name of names) {
        if (name.length > largest.length) {
            largest = name;
        }
    }
    return largest;
}

const names = ["Tom ", "Jerry", "Jihad", "Jubaeid", "Bayjid Alom!"];
const largest = largest_name(names);
console.log("Largest name is :", largest)



// Calculator Machine

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}


function Calculator(a, b, operation) {

    if (operation === "add") {
        const result = add(a, b);
        return result;
    }
    else if (operation === "subtract") {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === "multiply") {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === "divide") {
        const result = divide(a, b);
        return result;
    }
    else {
        return `${operation} is not supported! `
    }
}

const result__1 = Calculator(10, 5, "add");
const result__2 = Calculator(10, 5, "subtract");
const result__3 = Calculator(10, 5, "multiply");
const result__4 = Calculator(10, 5, "divide");

console.log("Value is :", result__1, result__2, result__3)

const result__5 = Calculator(10, 5, "modulus");
console.log(result__5)



 
console.log("✅ Function_____________Explaination_____(i-ii)")

function countObjectKeys(obj) {
    const keys = Object.keys(obj)
    const key_length = keys.length;
    return key_length;
}

const person = { name: "Bayjid Alom", age: 18, roll: 24118 }
const keys = countObjectKeys(person);
console.log("Total key is :", keys)








