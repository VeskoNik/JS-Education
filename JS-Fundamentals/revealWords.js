function solve(words,text){
    let secondText = text
    let newWords = words.split(', ')
for (const word of newWords) {
    let symbols = '*'.repeat(word.length)
   secondText = secondText.replace(symbols,word)
}
console.log(secondText);
}
solve('great, learning',

'softuni is ***** place for ******** new programming languages')