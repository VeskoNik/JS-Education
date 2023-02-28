function solve(arr) {
    let listOfParticipants = {}
    let distance = 0
    let firstLine = arr.shift().split(', ')
    for (const el of firstLine) {
        let name = el
        if (!listOfParticipants[name]) {
            listOfParticipants[name] = distance
        }
    }
    
    let pattern = /[A-Za-z]+/g
    let command = arr.shift()
    let digitPattern = /[0-9]/g
    
    while (command != 'end of race') {
        let name = ''
        let sum = 0
        let match = command.matchAll(pattern)
        for (const char of match) {
            name += `${char[0]}`
        }
        if(listOfParticipants.hasOwnProperty(name)){
            let digitMatch = command.matchAll(digitPattern)
            for (const digit of digitMatch) {
                sum+= Number(digit[0])
            }
            listOfParticipants[name] += sum
        }
        command =arr.shift()
    }
    let sort = Object.entries(listOfParticipants).sort((a,b) => b[1] - a[1])
   let counter = 0 
   for (const el of sort) {
        counter++
        if(counter === 1){
            console.log(`1st place: ${el[0]}`);
        }else if(counter === 2){
            console.log(`2nd place: ${el[0]}`);
        }else if(counter === 3){
            console.log(`3rd place: ${el[0]}`);
        }
   }
}
solve(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])