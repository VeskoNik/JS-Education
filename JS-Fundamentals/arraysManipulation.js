function solve(arr){
let newArr = arr.shift().split(' ').map(Number)
let index = 0
for(let i = 0 ; i < arr.length ; i ++){
    let command = arr[i]
    command = command.split(' ')
    for (const element of command) {
            if (element === "Add") {
                newArr.push(Number(command[1]))
            }else if(element === "Remove"){
                index = newArr.indexOf(Number(command[1]))
                newArr.splice(index,1)
            }else if(element === "RemoveAt") {
                newArr.splice(command[1],1)
            }else if(element === "Insert"){
                index = Number(command[2])
                newArr.splice(index , 0 ,Number(command[1]))
            }
        }
    }
    console.log(newArr.join(' '));
}
solve(['4 19 2 53 6 43',
        'Add 3',
        'Remove 2',
        'RemoveAt 1',
        'Insert 8 3'])