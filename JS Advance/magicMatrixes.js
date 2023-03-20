function solve(arr){
    let row = 0 
    let collum = 0
for(let i = 0 ; i < arr.length ; i ++){
    let currentRow = arr[i]
    
    for(let j = 0 ; j < currentRow.length; j ++){
        row+= Number(currentRow[j])
        collum += Number(currentRow[0])
    }
}
if(row === collum){
    console.log('true');
}else{
    console.log('false');
}
}
solve([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])