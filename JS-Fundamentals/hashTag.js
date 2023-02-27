function solve(text){
    let newText = text.split(' ')
    
    for (const word of newText) {
        if(word.startsWith('#') && word.length >1){
            let isTrue = true
            let newWord =word.toLowerCase().split('')
            newWord.shift()
            for (const el of newWord) {
                if(!(el.charCodeAt()>96 && el.charCodeAt()<123)){
                    isTrue= false
                }
            }
            if(isTrue){
                let result = word.replace('#','');
                console.log(result);
            }
        }
        
    }

}
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')