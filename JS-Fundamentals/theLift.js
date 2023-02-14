function solve(arr){
    let passangersWaiting = Number(arr.shift())
    let newArr = arr.shift().split(' ').map(Number)
    for (let i = 0 ; i < newArr.length ; i ++) {
        if(newArr[i] === 0 && passangersWaiting>=4){
                newArr[i]+= 4
                passangersWaiting-=4
        }else if(newArr[i] === 0 && passangersWaiting>=3){
            newArr[i]+= 3
            passangersWaiting-=3
        }else if(newArr[i] === 0 && passangersWaiting>=2){
            newArr[i]+= 2
            passangersWaiting-=2
        }else if(newArr[i] === 0 && passangersWaiting>=1){
            newArr[i]+= 1
            passangersWaiting-=1
        }
        if(newArr[i] === 1 && passangersWaiting>=3){
                newArr[i]+= 3
                passangersWaiting-=3
        }else if(newArr[i] === 1 && passangersWaiting>=2){
            newArr[i]+= 2
            passangersWaiting-=2
        }else if(newArr[i] === 1 && passangersWaiting>=1){
            newArr[i]+= 1
            passangersWaiting-=1
        }
        if(newArr[i] === 2 && passangersWaiting>=2){
            newArr[i]+= 2
            passangersWaiting-=2
        }else if(newArr[i] === 2 && passangersWaiting>=1){
        newArr[i]+= 1
        passangersWaiting-=1
        }
        if(newArr[i] === 3 && passangersWaiting>=1){
            newArr[i]+= 1
            passangersWaiting-=1
        }

    } 
    if(newArr.includes(0)||newArr.includes(1)||newArr.includes(2)||newArr.includes(3)){
        console.log(`The lift has empty spots!`);
        console.log(newArr.join(' '));
    }else{
        if(passangersWaiting>0){
            
            console.log(`There isn't enough space! ${passangersWaiting} people in a queue!`);
            console.log(newArr.join(' '));
            
        }
    }
    if(!(newArr.includes(0)||newArr.includes(1)||newArr.includes(2)||newArr.includes(3)) && passangersWaiting === 0){
        console.log(newArr.join(' '));
    }
}
solve([
    "16",
    "0 0 0 0"
   ]
   
   )