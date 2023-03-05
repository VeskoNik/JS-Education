function solve(arr){
let budget = arr[0]
let students = arr[1]
let flourPrice = arr[2] 
let eggPrice = arr[3] * 10
let apronPrice = arr[4] * Math.ceil((students*1.20))
let studentCounter = 0
let studentsSum = 0
for(let i = 0 ; i < students ; i ++){
    studentCounter++
    let priceOneStudent = flourPrice + eggPrice 
    if(studentCounter % 5 === 0 ){
        priceOneStudent = eggPrice 
    }
    studentsSum+= priceOneStudent
}
studentsSum = studentsSum + apronPrice
if(studentsSum <= budget){
    console.log(`Items purchased for ${(studentsSum).toFixed(2)}$.`);
}else{
    console.log(`${(studentsSum - budget).toFixed(2)}$ more needed.`);
}
}
solve([50,
2,
1.0,
0.10,
10.0])
