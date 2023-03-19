function solve(number){
    let arr = number.toString().split('')
    let boo = true
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        let first = arr[0]
        if(first != arr[i]){
            boo = false
        }
        sum += Number(arr[i])
    }
    console.log(boo);
    console.log(sum);
}
solve(2222222)
solve(1234)