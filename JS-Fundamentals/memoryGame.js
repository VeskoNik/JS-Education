function solve(arr){
let newArr = arr.shift().split(' ').map(String)
let index = 0
let command = arr[index]
let roundCounter = 0
index++
while (command != 'end'){
    let numbers = command.split(' ').map(String)
    roundCounter++
   if((numbers[0] < 0 || numbers[1] < 0) || (numbers[0] === numbers[1])){
    let middleIndex = newArr.length / 2
    newArr.splice(middleIndex,0,`-${roundCounter}a`,`-${roundCounter}a`)
    console.log("Invalid input! Adding additional elements to the board");
   }else if(numbers[0] >newArr.length-1 || numbers[1] > newArr.length-1){
    let middleIndex = newArr.length / 2
    newArr.splice(middleIndex,0,`-${roundCounter}a`,`-${roundCounter}a`)
    console.log("Invalid input! Adding additional elements to the board");
   }else{
    let newIndex1 = Number(numbers[0])
    let newIndex2 = Number(numbers[1])
    if(newArr[newIndex1] == newArr[newIndex2]){  
        let num = newArr[newIndex1]
        console.log(`Congrats! You have found matching elements - ${num}!`);
        newArr.splice(newIndex1,1)
        newArr.splice((newArr.indexOf(num)),1)
        }else{
            console.log("Try again!");
        }
   }
   
   if(newArr.length == 0){
    console.log(`You have won in ${roundCounter} turns!`);
    return;
   }
   
command=arr[index]
index++
}

    console.log('Sorry you lose :(');
    console.log(newArr.join(' '));

}
solve( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "11 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    
    )