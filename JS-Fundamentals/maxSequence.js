function solve(array) {

    let maxSequence = 1;
    let counter = 1;
    let result = [];
    let element = 0;
    for (let i = 0; i < array.length; i++) {
        let currentNum = 0 ;
        currentNum = array[i]
        for (let j = i + 1; j < array.length; j++) {
            let nextNum = 0;
            nextNum = array[j]
            if (currentNum === nextNum) {
                counter++;
            } else {
                break;
            }
        }
        if (counter > maxSequence) {
            maxSequence = counter;
            element = array[i];
        }
        counter = 1;
    }
    for (let k = 0; k < maxSequence; k++) {
        result.push(element);
    }
    console.log(result.join(' '));
}
solve([1, 1, 1, 2, 3, 1, 3, 3])
