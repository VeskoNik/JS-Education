function solve(arr){
    let result = {}
    let resultArr = [];
    arr.shift()
    for (const el of arr) {
        let firstLine = [];
        let line = el.split('|')
        for (const element of line) {
            if(element != ''){
                let elem = element.trim()
                firstLine.push(elem)
            } 
        }
       result ={
        Town:`${firstLine[0]}`,
        Latitude:Number(Number(firstLine[1]).toFixed(2)),
        Longitude:Number(Number(firstLine[2]).toFixed(2))
       }
       resultArr.push(result)
    }
    console.log(JSON.stringify(resultArr));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)