function solve(word,text){
    let newText = text.split(' ')
    for (const el of newText) {
        let element = el.toLowerCase()
        if (word === element) {
            console.log(word);
            return;
        }
        
    }
    console.log(`${word} not found!`);
}
solve('javascript',

'JavaScript is the best programming language')