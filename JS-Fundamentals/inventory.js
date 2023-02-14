function solve(arr){
let newArr = arr.shift().split(', ')
let index = 0
let command = arr[index]
index++
while(command!='Craft!'){
    command = command.split(' - ')
    if(command[0] === 'Collect'){
        if(!newArr.includes(command[1])){
            newArr.push(command[1])
        }
    }else if(command[0] === 'Drop'){
        if(newArr.includes(command[1])){
            newArr.splice((newArr.indexOf(command[1])),1)
        }
    }else if(command[0] === 'Combine Items'){
        let newCommand = command[1].split(':')
        if(newArr.includes(newCommand[0])){
            newArr.splice((newArr.indexOf(newCommand[0]))+1,0,newCommand[1])
        }
    }else if(command[0] === 'Renew') {
        if(newArr.includes(command[1])){
            newArr.splice((newArr.indexOf(command[1])),1)
            newArr.push(command[1])
        }
    }
command = arr[index]
index++
}
console.log(newArr.join(', '));
}
solve([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]  
  )