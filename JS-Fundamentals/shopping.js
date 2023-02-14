function solve(arr){
    let currentArr = arr.shift().split('!')
    let index = 0
    let command = arr[index]
    index++
    while(command != 'Go Shopping!'){
        let newCommand = command.split(' ')
        let firstCommand = newCommand[0]
        let product = newCommand[1]
        let product2 = newCommand[2]
        if(firstCommand === 'Urgent'){
            if(!currentArr.includes(product)){
                currentArr.unshift(product)
            }
        }else if(firstCommand === 'Unnecessary'){
            if(currentArr.includes(product)){
                currentArr.splice((currentArr.indexOf(product)),1)
            }
        }else if(firstCommand === 'Correct'){
            if(currentArr.includes(product)){
                currentArr[(currentArr.indexOf(product))] = product2
            }
        }else if(firstCommand === 'Rearrange'){
            if(currentArr.includes(product)){
                currentArr.splice((currentArr.indexOf(product)),1)
                currentArr.push(product)
            }
        }
    command = arr[index]
    index++
    }
    console.log(currentArr.join(', '));
}
solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

