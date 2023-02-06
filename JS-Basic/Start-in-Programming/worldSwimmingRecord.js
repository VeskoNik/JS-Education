function solve(input){
    let recordInSec = Number(input[0]) ;
    let distance = Number(input[1]) ;
    let timeForOneMeter = Number(input[2]) ;
    
    let timeIvan = distance * timeForOneMeter
    let timeWithResistance = Math.floor(distance / 15) * 12.5
    let finalTimeIvan = timeIvan + timeWithResistance
    if (recordInSec > finalTimeIvan) {
         console.log(`Yes, he succeeded! The new world record is ${(finalTimeIvan).toFixed(2)} seconds.`)
     } else {
         console.log(`No, he failed! He was ${(finalTimeIvan - recordInSec).toFixed(2)} seconds slower.`)
     }
}
//solve(["10464" , "1500" , "20"])
solve(["55555.67" , "3017" , "5.03"])

