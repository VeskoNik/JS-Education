function solve(arr){
    let newArr = arr.shift().split(' ').map(Number)
    let maxCapacity = Number(arr.shift())
    for (const element of arr) {
        let command = element.split(' ')
        if(command[0] === "Add"){
            newArr.push((Number(command[1])))
        }else {
            for(let i = 0 ; i < newArr.length ; i ++) {
                if((newArr[i] + Number(command)) <= maxCapacity){
                    newArr[i]+= Number(command)
                    break;
                }else{continue;}
            }
        }
        
    }
    console.log(newArr.join(' '));
}
solve(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])