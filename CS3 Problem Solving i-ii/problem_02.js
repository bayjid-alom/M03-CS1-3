/**** Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }
Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }   ****/

// https://github.com/habib-utsho/B13_js_3_function_and_problem_solving

/****
সরাসরি অবজেক্টের লেংথ বের করা যায় না। প্রথমে অবজেক্ট কে এরে বানাবো;  এরপর length;
Object.keys(object_name)    -- object to array
Object.keys(object_name).length;    -- length of array   ****/


function analyzeMarks(marksObj) {
    let total = 0;

    let highest_mark = -Infinity;   // সর্বনিম্ন মান ধরতে হবে ।
    let lowest_mark = Infinity;

    let highest_subject = null;
    let lowest_subject = null;

    for (let subject in marksObj) {
        let mark = marksObj[subject];
        total += mark;

        if (mark > highest_mark) {
            highest_mark = mark;
            highest_subject = subject;
        }

        if (mark < lowest_mark) {
            lowest_mark = mark;
            lowest_subject = subject;
        }
        // console.log(key, "->", mark)
    }

    let average = total / Object.keys(marksObj).length;
    console.log("Total marks :", total)
    console.log("Average Marks is :", average);

    console.log("Highest mark :", highest_mark, "->", highest_subject)
    console.log("Lowest mark :", lowest_mark, "->", lowest_subject)

    // Object return; if key & value are same.
    return {
        total,
        average,
        highest_subject,
        lowest_subject,
    }
}

const sub_marks = { math: 78, english: 65, physics: 88, bangla: 55 };
const output = analyzeMarks(sub_marks)
console.log("✔️ ", output)
