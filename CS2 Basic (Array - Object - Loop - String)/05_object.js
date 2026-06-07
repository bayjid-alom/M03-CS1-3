// Object - non premitive or refferencial data type

const person = {
    name: "Bayjid Alom",
    age: 18,
    dream: "Become a Programmer",
    hobby: "Read Documentation",
    relationship: "Single",
    "favourite places": ["Sarinda", "JA Park", "Circuit House"],
    address: {
        city: "Dhaka",
        area: "Jahabox Lane",
        zip: 1206
    }


    

}

console.log(person)

/**
 Access 2 ways -
 1. dot notation
 2. bracket notaion
 */

// value access (dot/bracket notation)
console.log(person.relationship)
console.log(person["favourite places"])
console.log(person.address.area)


// to get all keys | values
let personKeys = Object.keys(person);
console.log(personKeys)
let personValues = Object.values(person);
console.log(personValues)

// loop iteration
for(let key in person){
    console.log(key, "➞ ", person[key])
}

// length of object
console.log("Object Length ➞ ", Object.keys(person).length)

for(let i = 0; i < personKeys.length; i++){
    console.log(i , " | ", personKeys[i]);
}




let personProperties = Object.keys(person)
console.log("Properties :", personProperties.length)
console.log(personProperties[0])

for(let i = 0; i < personProperties.length; i++){
    let key = personProperties[i];
    let value = person[key]
    console.log(i, " } ", key, " _ ", value)
}




// change value
person.name = "Bayjid Alom Jihad";
console.log(person);

delete person.relationship;
delete person.age;
delete person["favourite places"];
console.log(person);