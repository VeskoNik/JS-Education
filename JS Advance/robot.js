function solve(){
    const library = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const recipes = {
        apple: { carbohydrate: 1 , flavour: 2},
        lemonade: { carbohydrate: 10 , flavour: 20},
        burger: { carbohydrate: 5, fat: 7, flavour: 3},
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10 , flavour: 10}
    }

    function cook(str){
        let [command ,elementOrRecipe ,quantity] = str.split(' ')
        quantity = Number(quantity)
        if(command === 'restock'){
            library[elementOrRecipe]+=quantity
            return 'Success'
        }else if(command === 'prepare'){
            let element = recipes[elementOrRecipe];
            for (const key in element) {
                if((library[key] - element[key] * quantity) < 0){
                    return `Error: not enough ${key} in stock`
                }
            }
            for (const key in element) {
                library[key]-= element[key] * quantity
            }
            return 'Success'
        }else if(command === 'report'){
            let result = []
            for (const key in library) {
                result.push(`${key}=${library[key]}`)
            }
            return result.join(' ');
        }
    }
    return cook;
}
let manager = solve()
console.log (manager ("restock flavour 50"))
console.log (manager ("prepare lemonade 4"))
console.log (manager ("restock carbohydrate 10"))
console.log (manager ("restock flavour 10"))
console.log (manager ("prepare apple 1"))
console.log (manager ("restock fat 10"))
console.log (manager ("prepare burger 1"))
console.log (manager ("report"))
console.log (manager ("prepare turkey 1"))
console.log (manager ("restock protein 10"))
console.log (manager ("prepare turkey 1"))
console.log (manager ("restock carbohydrate 10"))
console.log (manager ("prepare turkey 1"))
console.log (manager ("restock fat 10")) 
console.log (manager ("prepare turkey 1"))
console.log (manager ("restock flavour 10"))
console.log (manager ("prepare turkey 1"))
console.log (manager ("report"))



