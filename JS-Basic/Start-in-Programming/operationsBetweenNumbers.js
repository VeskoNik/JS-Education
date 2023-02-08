function solve(input) {
    let n1 = Number(input[0])
    let n2 = Number(input[1])
    let operator = input[2]
    let remain = 0;
    let result = 0;
    let evenOrOdd
    if (operator === "+" ) {
        result = n1 + n2
        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);

    } else if (operator === "-") {
        result = n1 - n2
        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    } else if (operator === "*") {
        result = n1 * n2
        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    }
    
    else if (operator === "/") {
        result = n1 / n2
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        console.log(`${n1} ${operator} ${n2} = ${(result).toFixed(2)}`) 
        }
    } else if (operator === "%") {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
        remain = n1 % n2
        console.log(`${n1} % ${n2} = ${remain}`) ;
     }

    }
}
solve(["10",
0,
"/"])



