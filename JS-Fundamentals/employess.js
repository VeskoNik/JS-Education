function solve(obj){
let personalNum = 0
for (const names of obj) {
    personalNum = names.length
    console.log(`Name: ${names} -- Personal Number: ${personalNum}`);
}
}
solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])