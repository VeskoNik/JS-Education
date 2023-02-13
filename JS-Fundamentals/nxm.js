function solve(number){ 
    let result = []
    for(let i = 0 ;i < number ; i ++){
        result.push(number)
        }
    for (let j = 0 ; j < number ; j++){
        console.log(result.join(' '));
    }
}
solve(7)