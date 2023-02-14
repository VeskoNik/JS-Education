function solve(arr){    
let index = 0
let currentArr = arr[index].split(' ').map(Number)
index++
let task = arr[index].split(' ')
index++
let command = task[0]
while(command != 'End'){
    let target = Number(task[1])
    let power = Number(task[2])
    if(command === 'Shoot'){
        if(target <= currentArr.length-1){
            currentArr[target]-= power
            if(currentArr[target]<= 0){
                currentArr.splice(target,1)
            }
        }
    }else if(command === 'Add'){
        if(target < 0 ){
            console.log('Invalid placement!');
        }else if(target <= currentArr.length-1){
            currentArr.splice(target,0,power)
        }else{
            console.log('Invalid placement!');
        }
    }else if(command === 'Strike'){
        if(target <= currentArr.length-1){
            if((target - power) < 0  ){
                console.log('Strike missed!');
            }else if((target + power) > (currentArr.length-1)){
                console.log('Strike missed!');
            }else{
                currentArr.splice((target-power),((power*2)+1))
            }     
        }
    }
task = arr[index].split(' ')
index++
command = task[0]
}
console.log(currentArr.join('|'));
}
solve(["1 1 2 3 4 5",
"Shoot 6 5",
"End"])
