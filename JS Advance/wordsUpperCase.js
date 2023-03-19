function solve(str){
console.log(str.match(/[A-Za-z0-9]+/g).join(', ').toUpperCase());
}
solve('hello, i am a developer at softUni')