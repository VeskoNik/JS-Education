function solve(arr){
let groups = {};
let gruopsResult = {};
for (const el of arr) {
  let char= [el[0]]
  let [item,price]= el.split(' : ')
  if(!groups[char]){
    groups[char] = [`${item}: ${price}`];
  }else{
    groups[char].push(`${item}: ${price}`)
  }
}
for (const element in groups) {
    gruopsResult[element] = groups[element].sort((a,b)=> a.localeCompare(b))
}
gruopsResult = Object.entries(gruopsResult).sort((a,b)=> a[0].localeCompare(b[0]))
gruopsResult = Object.fromEntries(gruopsResult)
for (const group in gruopsResult) {
    console.log(`${group}`);
    for (const el of gruopsResult[group]) {
        console.log(`  ${el}`);
    }
}
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)