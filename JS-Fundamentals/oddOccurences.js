function solve(words) {
    let newWords = words.toLowerCase().split(' ')
    let obj = {}
    let result = []
    let finalRes = []
    let loggin = ''
    for (const word of newWords) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 1
        } else {
            obj[word]++
        }
    }
    for (const key in obj) {
        if (obj[key] % 2 == 1) {
            result.push(key)
        }
    }
    for (const word of newWords) {
        if (result.includes(word)) {
            if (!finalRes.includes(word)) {
                finalRes.push(word)
                loggin += `${word} `
            }
        }
    }

    console.log(loggin);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')