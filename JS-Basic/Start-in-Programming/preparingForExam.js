function solve(input) {
    let index = 0
    let badGrades = input[index]
    index++
    let command = input[index]
    index++
    let goodGradesCount = 0;
    let badGradesCount = 0;
    let sumGrades = 0;
    let lastTask = "";
    let averageGrade = 0;
    let sumTasks = 0;

    while (command != "Enough") {
        lastTask = input[index - 1]
        let grade = Number(input[index])


        if (grade <= 4.00) {
            badGradesCount++
        } else {
            goodGradesCount++
        }
        sumGrades += grade
        sumTasks = badGradesCount + goodGradesCount
        averageGrade = sumGrades / sumTasks
        if (badGradesCount >= badGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            return;

        }

        index += 2
        command = input[index - 1]

    }
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${sumTasks}`);
    console.log(`Last problem: ${lastTask}`)

}
solve(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])



