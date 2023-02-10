function solve(input) {
    let i = 0
    let name = input[i]
    i++
    let sumGrade = 0;
    let badGrades = 0;
    let excludedFromClass = false;
    let classCount = 1;

    while (classCount <= 12) {
        let grades = Number(input[i])
        i++
        if (grades < 4.00) {
            badGrades++
            if (badGrades === 2) {
                excludedFromClass = true;
                break;
            }
            continue;
        }
        sumGrade += grades
        classCount++


    }
    let averageGrade = sumGrade / 12


    if (excludedFromClass) {
        console.log(`${name} has been excluded at ${classCount} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
solve(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
