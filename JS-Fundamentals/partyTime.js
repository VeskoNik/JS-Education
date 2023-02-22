function solve(arr) {
    let command = arr.shift()
    let vipList = []
    let regList = []
    while (command !== "PARTY") {
        if (!isNaN(command[0])) {
            vipList.push(command)
        } else {
            regList.push(command)
        }
        command = arr.shift()
    }
    let fullList = vipList.concat(regList)
    for (const el of arr) {
        if(fullList.includes(el)){
            fullList.splice((fullList.indexOf(el)),1)
        }
    }
    console.log(fullList.length);
    fullList.forEach(element => {
        console.log(element);
    });

}
solve(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc'])