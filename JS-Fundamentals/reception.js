function solve(arr){
    let firstEmpStundetsPerHour = Number(arr[0])
    let secondEmpStudentsPerHour = Number(arr[1])
    let ThirdEmpStudentsPerHour = Number(arr[2])
    let students = Number(arr[3])
    let hourCounter = 0
while(students > 0){
    hourCounter++
        students-=firstEmpStundetsPerHour
        students-=secondEmpStudentsPerHour
        students-=ThirdEmpStudentsPerHour
        if(hourCounter % 4 === 0){
            hourCounter++
        }
}
console.log(`Time needed: ${hourCounter}h.`);
}
solve(['1','2','3','45'])