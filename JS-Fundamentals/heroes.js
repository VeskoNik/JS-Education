function solve(arr){
    let allHeroes = []
    
    arr.forEach(line => {
        let[name,level,bag]=line.split(' / ')
        let hero = {
        name,
        level,
        bag
        }
        allHeroes.push(hero)    
    });
    allHeroes.sort((a,b)=> a.level - b.level)
    allHeroes.forEach(element =>{
        console.log(`Hero: ${element.name}`)
        console.log(`level => ${element.level}`)
        console.log(`items => ${element.bag}`);
    })
}
solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])