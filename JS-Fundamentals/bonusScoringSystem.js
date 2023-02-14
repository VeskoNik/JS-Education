function solve(arr){
    let stundets = Number(arr.shift())
    let lectures = Number(arr.shift())
    let additionalBonus = Number(arr.shift())
    arr = arr.map(Number)
    let currentStundent = 0
    let currentBonus = 0 
    
    for (const num of arr){
        let totalBonus = Math.ceil(num/ lectures * (5+additionalBonus))
        if(totalBonus >= currentBonus){
        currentBonus= totalBonus
        currentStundent = num
        }
    }
    //let totalBonus = Math.ceil(mostAttendance / lectures * (5+additionalBonus))
    console.log(`Max Bonus: ${currentBonus}.`);
    console.log(`The student has attended ${currentStundent} lectures.`);
}
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])
  