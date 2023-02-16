function solve (num) {

    for (let i = 1 ; i <= num ; i++) {
        let plus = ''
        for (let y = 1 ; y <= i ; y++) {
            plus += `${i} `
        }console.log(plus);
    }
}
solve(4)