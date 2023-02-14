function solve(arr){
    let health = 100
    let bitcoins = 0 
    let newArr = arr.split('|')
    let counter = 0
    for(let i = 0 ; i < newArr.length ; i ++){
        let command = newArr[i].split(' ')
        let add = Number(command[1])
        if(command[0] === "potion"){
            if((health + add) > 100){
                counter++
                let addedHp = add - ((health + add) - 100) 
                console.log(`You healed for ${addedHp} hp.`)
                health = 100
                console.log(`Current health: ${health} hp.`);
            } else {
                counter++
                health+= add
                console.log(`You healed for ${add} hp.`)
                console.log(`Current health: ${health} hp.`);
            }
        }else if(command[0] === 'chest'){
            counter++
            console.log(`You found ${add} bitcoins.`);
            bitcoins+= add
        }else{
            counter++
                health-=add
                if(health <= 0){
                    console.log(`You died! Killed by ${command[0]}.`);
                    console.log(`Best room: ${counter}`);
                    return;
                }else{
                    console.log(`You slayed ${command[0]}.`);
                }
            
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}
solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")