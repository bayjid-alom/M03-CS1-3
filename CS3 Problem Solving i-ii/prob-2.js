function analyzeMarks(marksObj) {

    let total = 0;
    let highestMark = -Infinity;        // highest e kom value rakhbo
    let lowestMark = Infinity;         // lowest e sobceye boro value rakhbo

    let highestSubject = null;
    let lowestSubject = null;

    for (let subject in marksObj) {
        let mark = marksObj[subject];
        // console.log(subject, "-->", mark);     // subject gulo niche niche
        total += mark;
        if (mark > highestMark) {
            highestMark = mark;
            highestSubject = subject;
        }

        if (mark < lowestMark) {
            lowestMark = mark;
            lowestSubject = subject;
        }
    }
    console.log("Highest mark ->", highestMark)
    console.log("Lowest Mark -> ", lowestMark)
    console.log("Highest Subject ->", highestSubject)
    console.log("Lowest Subject ->", lowestSubject)


    let average = total / Object.keys(marksObj).length;       //made array -> check lenght
    // console.log("Total ->", total);  
    // console.log("Average ->", average);  

    return {
        // total: total,          // have a shortcut if key=value =same hoy
        // average: average
        total,
        average,
        highestSubject
    }

}

let output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(output)