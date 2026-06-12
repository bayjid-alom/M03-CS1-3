function checkPassword(password) {
    let reasons = [];

    let length = password.length;

    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");

    for (let i = 0; i < length; i++) {

        let character = password[i];
        console.log(character)
        if (character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if (character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
    }
    console.log(password, length, hasUpperCase, hasNumber)
    if(!hasNumber){
        reasons.push("Missing Number")
    }

    if(!hasUpperCase){
        reasons.push("Missing Uppercase")
    }
    if(hasSpace === true){
        reasons.push("Space found!");
    }

    let isValid = reasons.length == 0;       //mane kono reasons nei
    console.log(isValid)
    //long way -- valid check  👇👇
    // let inValid;  
    // if(reasons.length === 0){
    //     isValid = true;
    // }
    // else{
    //     isValid = false;
    // }


    return {
        valid: isValid,
        reasons,
    }
}

let output = checkPassword("helloWorld ")
let output2 = checkPassword("Hello123")         // valid cz no reasons to error

console.log(output)
console.log(output2)        // No error or valid