function solve(number){
    let result = 0
    for(let i = 1 ; i < number ; i ++){
        if(number % i === 0)  {
            result+=i
        }
    }
    if(result === number){
        console.log('We have a perfect number!');
    }else{console.log("It's not so perfect.");}
}
solve(1236498)