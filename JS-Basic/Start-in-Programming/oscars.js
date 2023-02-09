function solve(input){
    let actorName = input[0]
    let academyPoints = Number(input[1])
    let juryCount = Number(input[2])
    
    let juryPoints = 0 ;
    let totalPoints = 0 ;


    for (i = 3 ; i < input.length ; i+=2) {
        let juryName = input[i]
        let points = input[i+1] 
        juryPoints += juryName.length * points / 2 
       totalPoints = juryPoints + academyPoints
        
     if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
        return ; 
    } 
} function solve(input){
    let actorName = input[0]
    let academyPoints = Number(input[1])
    let juryCount = Number(input[2])
    
    let juryPoints = 0 ;
    let totalPoints = 0 ;


    for (i = 3 ; i < input.length ; i+=2) {
        let juryName = input[i]
        let points = input[i+1] 
        juryPoints += juryName.length * points / 2 
       totalPoints = juryPoints + academyPoints
        
    } if (totalPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
        return ; 
    } 
}  console.log(`Sorry, ${actorName} you need ${((1250.5 - totalPoints)).toFixed(1)} more!`);
    
}
solve(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])