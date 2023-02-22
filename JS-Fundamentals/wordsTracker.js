function solve(arr){
    let command = arr.shift().split(' ')
    let newObj = {};
    for (const word of command) {
        newObj[word] = 0
    }
    for (const element of arr) {
        if (newObj.hasOwnProperty(element)) {
            newObj[element]++;
        }
    }
    let sort = Object.entries(newObj).sort((a,b)=> b[1]-a[1])
    sort.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
}
solve([

    'is the sentence',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])