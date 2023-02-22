function solve(obj){
for (const element of obj) {
    [town,latitude,longitude]=element.split(' | ')
    let newObj = {
        town: town,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    }
  console.log(newObj);
}
   
}
solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])