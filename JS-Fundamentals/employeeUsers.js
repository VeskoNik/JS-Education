function solve(arr){
    let result= {}
arr.forEach(element => {
    let [name,user] = element.split(' -> ')
    if(!result.hasOwnProperty(name)){
        result[name] = []
    }
    if(!result[name].includes(user)){
        result[name].push(user)
    }
});
let data = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]))
for (const el of data) {
    console.log(`${el[0]} `);
    for (const elem of el[1]) {
        console.log(`-- ${elem}`);
        }
    }
}
solve([ 'SoftUni -> AA12345', 
'SoftUni -> BB12345', 'Microsoft -> CC12345',
 'HP -> BB12345' ])