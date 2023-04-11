function solve(...rest){
    const obj = {}
    let counter = 1;
    for (const el of rest) {
        console.log(`${typeof el}: ${el}`); 
        if(!obj[typeof el]){
          obj[typeof el] = counter
          }else{
              obj[typeof el] += counter
          } 
    }
  let sort = Object.entries(obj)
  sort.sort((a,b) => b[1] - a[1]).forEach(element => {console.log(`${element[0]} = ${element[1]}`);
  });
}
solve('cat', 42, function () { console.log('Hello world!'); })