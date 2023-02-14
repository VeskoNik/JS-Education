function solve(arr){
let index = 0
let energy = Number(arr[index])
index++
let command = arr[index]
index++
let counter = 0
while (command != 'End of battle') {
    let enemy = Number(command) 
    if (energy >= enemy) {
        counter++
        if(counter % 3 === 0){
            energy+= counter
        }
        energy-= enemy
    }else{
        console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
        return ;
    }
    command = arr[index]
    index++
    
}
console.log(`Won battles: ${counter}. Energy left: ${energy} `);
}
solve((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
)