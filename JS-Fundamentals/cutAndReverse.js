function solve(text){
let middle = text.length / 2
let first = text.substring(0,middle)
let second = text.substring(middle)
let reverseFirst = first.split('').reverse().join('')
let reverseSecond = second.split('').reverse().join('')
console.log(reverseFirst);
console.log(reverseSecond);
}solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')