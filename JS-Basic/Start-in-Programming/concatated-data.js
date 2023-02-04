function concatateData(input){
    let firstname = input[0]
    let lastname = input[1]
    let age = Number(input[2])
    let town = input[3]
    let str = `You are ${firstname} ${lastname}, a ${age}-years old person from ${town}.`
    console.log(str)
}
concatateData(["Veselin","Nikolov",28,"Pernik"])