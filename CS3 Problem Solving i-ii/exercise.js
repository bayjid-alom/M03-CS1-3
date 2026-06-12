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


function analyzeMarks(marksObj) {
    let total_marks = 0;

    let highest_mark = -Infinity;   // সর্বনিম্ন মান ধরতে হবে ।
    let lowest_mark = Infinity;

    let highest_subject = null;
    let lowest_subject = null;

    for (let subject in marksObj) {
        let mark = marksObj[subject];
        total_marks += mark;

        if (mark > highest_mark) {
            highest_mark = mark;
            highest_subject = subject;
        }

        if (mark < lowest_mark) {
            lowest_mark = mark;
            lowest_subject = subject;
        }

        console.log(subject, "->", mark);
    }
    console.log("Total Marks :", total_marks);
    let average = total_marks / Object.keys(marksObj).length;
    console.log("Average is :", average);
    console.log("Highest mark:", highest_mark, "Lowest mark:", lowest_mark)

    return {
        total_marks,
        average,
        highest_subject,
        lowest_subject,
    }
}

const sub_marks = { math: 78, english: 65, physics: 88, bangla: 55 };
const output = analyzeMarks(sub_marks);
console.log(output);







