/**** Word Frequency Counter
Problem - 01
Statement: Count how many times each word appears in a sentence and return the result as an object.
Rules:
Ignore case differences
Ignore extra spaces   ****/


function wordCount(sentence) {
    // শুরুতেই lower_case এ রুপান্তর করে নিলে বেশি সহজ হবে ।
    const words = sentence.toLowerCase().split(" ");
    let word_count = {};

    for (let word of words) {
        if (word_count[word] == true) {
            word_count[word]++;
        }
        else {
            word_count[word] = 1;
        }
    }
    return word_count;
}

let sentence = wordCount("I love JS and I love coding and JS is fun");
console.log("Count :", sentence)




/****
Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }
Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }   ****/







