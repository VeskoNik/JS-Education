function solve(input) {
    let index = 0
    let length = Number(input[index])
    index++
    let width = Number(input[index])
    index++
    let command = input[index]
    index++
    let cakePieces = length * width
    let tookedPieces = 0;
    while(command != "STOP") {
        tookedPieces = Number(command)
        if (cakePieces >= tookedPieces) {
            cakePieces -= tookedPieces
        } else {
            console.log(`No more cake left! You need ${Math.abs(cakePieces - tookedPieces)} pieces more.`);
            return;
        }
        command = input[index]
        index++
    }
    console.log(`${cakePieces} pieces are left.`);
}
solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


