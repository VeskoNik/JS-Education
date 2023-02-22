function solve(arr){
  let newArr=[]
    arr.forEach(line => {
        
        for (const key of line) {
            let  currentLine = line.split(' : ')
            let newObject = {
                Product: currentLine[0],
                Price: Number(currentLine[1])
            }
            newArr.push(newObject)
           break;
        }
        
    });
    newArr.sort((a,b) => a.Product.localeCompare(b.Product))
    let data = {}
    for (const element of newArr) {
        
        let group = element.Product[0]
       if(!data[group]) {
        data[group] = [element]
       }else{
        data[group].push(element)
       }
        
    }
    // let data = newArr.reduce((a,b) => {
    //     // get first letter of name of current element
    //     let group = b.Product[0];
     
    //     if(!a[group]){ a[group] = [b]
    //     }
    //     else{ a[group].push(b);
    //     }
    //     return a;
    //   },{})
      for (const key in data) {
        console.log(key);
        let newKey = data[key]
        for (const element of newKey) {
            console.log(`  ${element.Product}: ${element.Price}`);
        }
        
      }
        
        
     

}
solve([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])