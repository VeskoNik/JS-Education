function solve(arr){
    arr.join(' ')
    let newArr = []
    for(let i = 0 ; i < arr.length ; i ++) {
        let command = arr[i].split(' ')
        let name = command[0]
        if(command.length === 3){
            if(newArr.includes(name)){
                console.log(`${name} is already in the list!`)
            }else{
            newArr.push(name)
            }
        }else{
            if(newArr.includes(name)){
                let index = newArr.indexOf(name)
                newArr.splice(index,1)
            }else{
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(newArr.join('\n'));
}
solve(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])