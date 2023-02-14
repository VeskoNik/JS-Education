function solve(arr){
    let newArr = arr.split(' ').map(Number)
    let sum = 0
    let avgNum = 0
    let counter = 0
    let resultArr= []
    
    
    for (const num of newArr) {
        sum+=num
        }
    avgNum = sum / newArr.length
    for (const element of newArr) {
        if(element > avgNum){
            counter++
            resultArr.push(element)
            
        }
    }
    let sortArr = resultArr.sort((a,b) => b-a)
    if(counter > 5){
        let result = sortArr.slice(0,5)
        console.log(result.join(' '));
    }else if (counter === 0){
        console.log("No");
    }else{
        console.log(sortArr.join(' '));
    }
}
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')