function solve(input){
    let tournamentsCount = Number(input[0])
    let startingPoints = Number(input[1])
    let tournamentsStage = "" ;
    let tournamentPoints = 0 ;
    let totalPoints = 0 ;
    let averagePoints = 0 ;
    let winPercent = 0 ; 

    for ( i = 2 ; i < tournamentsCount + 2 ; i++){
        tournamentsStage = input[i]
        if (tournamentsStage === "F") { 
            tournamentPoints = 1200
            totalPoints += tournamentPoints 
            

        } else if (tournamentsStage === "SF") {
            tournamentPoints = 720 
            totalPoints += tournamentPoints
         
            
        } else if (tournamentsStage === "W") { 
            tournamentPoints = 2000 
            totalPoints += tournamentPoints 
           winPercent += input[i].length / tournamentsCount * 100
           
        } 
    } averagePoints = totalPoints  / tournamentsCount
    console.log(`Final points: ${(totalPoints + startingPoints)}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${(winPercent).toFixed(2)}%`);

   
}
solve(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"])