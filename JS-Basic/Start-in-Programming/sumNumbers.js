function solve(input){
    let i = 0 ; 
    let number = Number(input[i])
    i++

    let sum = 0 ; 
    while (sum < number)
    {
        let currentNum = Number(input[i])
       
        sum += currentNum
        i++
       
    } 
    console.log(sum);
   
}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
