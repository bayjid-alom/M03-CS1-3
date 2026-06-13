/****
 Problem 3: Password Strength Checker
Function name: checkPassword(password)
Rules:
● Length must be at least 8
● Must contain at least 1 number
● Must contain at least 1 uppercase letter
● Must not contain spaces
Test case 1
Input: "helloWorld"
Output:
{ valid: false, reasons: ["missing number"] }
Test case 2
Input: "Hello123"
Output: { valid: true, reasons: [] }  ****/

/**** Steps to Solve :⤵️
 step-1. find out length of provided password
 step-2. think - (upper = number = false) , for loop for letters
 step-3. number check
 step-4. Capital letter character check
 step-5. Reasons empty array
 step-6. false check(uppercase & number), reasons.push()
 step-7. space check -> password.includes(" ");
 step-8. validation check
 step-9. return { valid: isvalid}
****/



function checkPassword(password) {
    let length = password.length;
    let reasons = [];

    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" "); // space check

    for (let i = 0; i <= length; i++) {
        let character = password[i];
        if (character >= "0" && character <= "9") {
            hasNumber = true;
        }
        if (character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
    }

    // console.log(password, length, hasUpperCase, hasNumber);

    // or, (hasNumber == falsel)
    if (!hasNumber) {
        reasons.push("Missing number!")
    }
    if (!hasUpperCase) {
        reasons.push("Missing uppercase!")
    }

    if (hasSpace == true) {
        reasons.push("Space found!")
    }

    let isValid = reasons.length == 0;   // valid.

    return {
        valid: isValid,
        reasons,
    }
}


const output__1 = checkPassword("helloWorld");
const output__2 = checkPassword("Hello123");

console.log("✔️ ", output__1)
console.log("✔️ ", output__2)

