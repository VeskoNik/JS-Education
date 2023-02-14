function solve(arr) {
    let neighbourhood = arr.shift().split("@").map(Number)
    let index = 0
    let command = arr[index]
    index++
    let currentPosition = 0
    let counter = 0
    while (command != 'Love!'){
        command = command.split(' ')
        currentPosition+= Number(command[1])
        if(currentPosition >= neighbourhood.length){
            currentPosition = 0
        }
        if(neighbourhood[currentPosition] > 0){
            neighbourhood[currentPosition]-= 2
            if(neighbourhood[currentPosition] === 0 ){
            console.log(`Place ${currentPosition} has Valentine's day.`);
            }
        }else{
            console.log(`Place ${currentPosition} already had Valentine's day.`);
        }
    command = arr[index]
    index++
    }
    console.log(`Cupid's last position was ${currentPosition}.`);
    for (const element of neighbourhood) {
        if (element >0){
            counter++
        }
    }
    if(counter === 0){
        console.log(`Mission was successful.`);
    }else{console.log(`Cupid has failed ${counter} places.`);}
}
solve(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])




