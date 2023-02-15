function solve(firstArr , secondArr) {
    for (const element of firstArr) { 
        if (secondArr.includes(element)) {
            console.log(element);
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
      ['Petar', 10, 'hey', 4, 'hello', '2'])