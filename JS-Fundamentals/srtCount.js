function solve(text,word){
let resultText = text.split(' ')
let counter = 0
for (let i = 0; i < resultText.length; i++) {
        if(resultText[i] === word){
            counter++
        }
}
console.log(counter);
}
solve('This is a word and it also is a sentence',
'is'
)