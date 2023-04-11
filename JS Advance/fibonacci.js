function getFibonator(){
let num = 1 
let prev = 0

function solve(){
    let fibonacci = num + prev;
    num = prev;
    prev = fibonacci;
    return fibonacci;
}
return solve;
}
let fib = getFibonator()
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())