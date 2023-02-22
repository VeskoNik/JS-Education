function solve(arr){
let newArr= []

arr.forEach(line => {
    currentLine = JSON.parse(line)

    for (const key in currentLine) {
        let newObject = {
            Term: key,
            Definition: currentLine[key]
        }
        if(newArr.find(elem => elem.Term === key)){
          let index = newArr.map(object =>object.Term).indexOf(key)
          newArr.splice(index,1)
          newArr.splice(index,0,newObject)
        }else{newArr.push(newObject)}
        
        
    }
});
newArr.sort((a,b) => a.Term.localeCompare(b.Term))
newArr.forEach(element =>{
    console.log(`Term: ${element.Term} => Definition: ${element.Definition}`);
})
}
solve([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road,typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Bus":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'
    
    ])