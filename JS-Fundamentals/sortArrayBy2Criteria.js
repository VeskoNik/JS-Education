function solve(arr){
let sortArr = arr.sort((a,b) => {
    return a.length - b.length || a.localeCompare(b) ;
})
console.log(sortArr.join('\n'));
}
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])