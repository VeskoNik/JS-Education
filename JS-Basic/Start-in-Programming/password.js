function solve(input) {
    let i = 0 ;
    let name = input[i]
    i++
    let password = input[i]
    i++
    while (password === password) {
        console.log(`Welcome ${name}!`);
        break;
        i++
    }
}
solve(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
