function solve(input){
    let index = 0;
    let jury = Number(input[index])
    index++
    let command = input[index]
    index++
    let avgGrade = 0 ;
    let totalSum = 0 ;
    let gradeCounter = 0;
    while (command != "Finish"){
        let presentation  = command
        let grade = 0 ;
        let sum = 0 ;
        for( let i = 0 ; i < jury ; i++) {
            grade = Number(input[index])
            index++ 
            sum += grade 
            avgGrade = (sum / jury).toFixed(2)
            totalSum += grade
            gradeCounter++
        }
        console.log(`${presentation} - ${avgGrade}.`);
        command = input[index]
        index++
    }
       console.log(`Student's final assessment is ${(totalSum / gradeCounter).toFixed(2)}.`);
}
solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

