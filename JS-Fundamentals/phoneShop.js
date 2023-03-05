function solve(arr){
let newArr = arr.shift().split(', ')
let command = arr.shift()
let newCommand =''
let phone = ''
let bonus = ''
while(command != 'End'){
    command = command.split(' - ')
    newCommand = command[0]
    phone = command[1]
    
    if(newCommand === 'Add'){
        if(!newArr.includes(phone)){
            newArr.push(phone)
        }
    }else if(newCommand === 'Remove'){
        if(newArr.includes(phone)){
            newArr.splice((newArr.indexOf(phone)),1)
        }
    }else if(newCommand === 'Bonus phone'){
        bonus = phone.split(':')
        let oldPhone = bonus[0]
        let newPhone = bonus[1]
        if(newArr.includes(oldPhone)){
            newArr.splice((newArr.indexOf(oldPhone)+1),0,newPhone)
        }
    }else if(newCommand === 'Last'){
        if(newArr.includes(phone)){
            newArr.splice((newArr.indexOf(phone)),1)
            newArr.push(phone)
        }
    }
    command = arr.shift()
}
console.log(newArr.join(', '));
}
solve(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])

