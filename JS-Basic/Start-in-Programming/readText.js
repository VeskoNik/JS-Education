function solve(input){
    let i = 0
    let text = input[i]
   i++
    while (text !== "Stop") {
        console.log(text);
        text = input[i]
        i++
    }
}
solve(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"])