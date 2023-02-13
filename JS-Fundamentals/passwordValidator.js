function solve(password){
    let digitCounter= 0
    let invalidSymbols = 0
    let passLength = password.length
    for(let i = 0 ; i < passLength ; i++){
        let currentChar = password[i].charCodeAt()
        let smallLetter = currentChar >= 97 && currentChar <=122
        let bigLetter = currentChar >=65 && currentChar <= 90
        let digit = currentChar >=48 && currentChar <= 57
        if(digit){
            digitCounter++
        }
        if(!digit && !bigLetter && !smallLetter){
            invalidSymbols++
        }
    }
    if(passLength <6 || passLength >10){
        console.log('Password must be between 6 and 10 characters');
    }
    if(invalidSymbols != 0){
        console.log('Password must consist only of letters and digits');
    }
    if(digitCounter < 2){
        console.log('Password must have at least 2 digits');
    }
    if(digitCounter >=2 && invalidSymbols === 0 && (passLength >=6 && passLength <= 10)){
        console.log('Password is valid');
    }
}

solve('MyPass123')