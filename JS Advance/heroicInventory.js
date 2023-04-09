function solve(arr){
    const heroes = [];
for (const line of arr) {
    let [name,level,rest] = line.split(' / ');
    level = Number(level);
    if(!rest){
        const items = [];
        heroes.push({name,level,items});
    }else{
    const items = rest.split(', ');

    heroes.push({name,level,items});
    }
}
return JSON.stringify(heroes);
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)