function solve(input) {
    let groupsCount = Number(input[0])
    let sumPeople = 0 ;
    let climbersMusala = 0 ; 
    let climbersMonblanc = 0 ;
    let climbersKilimanjaro = 0 ;
    let climbersK2 = 0 ;
    let climbersEverest = 0;
    let totalGroups = 0
    

    let percentMusala = 0 ; 
    let percentMonblanc = 0 ;
    let percentKilimanjaro = 0 ; 
    let percentK2 = 0 ; 
    let percentEverest = 0 ;

        for (i = 1 ; i <= groupsCount ; i++) {
            totalGroups = Number(input[i])
            sumPeople += totalGroups
            
            if (totalGroups <=5) {
                climbersMusala += totalGroups
            } else if (totalGroups >=6 && totalGroups <= 12) {
                climbersMonblanc += totalGroups
            } else if (totalGroups >= 13 && totalGroups <= 25) {
                climbersKilimanjaro += totalGroups
            } else if (totalGroups >= 26 && totalGroups <= 40) {
                climbersK2 += totalGroups
            } else {
                 climbersEverest += totalGroups
            }
            
            percentMusala = climbersMusala / sumPeople * 100
            percentMonblanc = climbersMonblanc / sumPeople * 100
            percentKilimanjaro = climbersKilimanjaro / sumPeople * 100
            percentK2 = climbersK2 / sumPeople * 100
            percentEverest = climbersEverest / sumPeople * 100

            
        } console.log(`${(percentMusala).toFixed(2)}%`);
          console.log(`${(percentMonblanc).toFixed(2)}%`);
          console.log(`${(percentKilimanjaro).toFixed(2)}%`);
          console.log(`${(percentK2).toFixed(2)}%`);
          console.log(`${(percentEverest).toFixed(2)}%`);
        
}
solve(["10","10","5","1","100","12","26", "17", "37", "40", "78"])