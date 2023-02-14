function solve(arr){
    index = 0
    let currentArr = arr[index].split(' ').map(Number)
    index++
    let command = arr[index]
    index++
    let counter = 0 
    let newArr= []
    while(command != 'End'){
        let target = currentArr[command]
        if(Number(command) > currentArr.length-1){
            command = arr[index]
            index++
            continue;
        }else{
            counter++
            currentArr[Number(command)] = -1
            for (const num of currentArr) {
                if(num === -1){
                    newArr.push(num)
                }else if(num > target){
                    let number = num
                    number-= target
                    newArr.push(number)
                }else{
                    let number2 = num
                    number2+= target
                    newArr.push(number2)
                }
                
            }
            currentArr = newArr
            newArr = []
           
        }
    command = arr[index]
    index++

    }
console.log(`Shot targets: ${counter} -> ${currentArr.join(' ')}`);
}
solve((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
)