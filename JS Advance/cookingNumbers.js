function solve(num , ...rest){
let command = rest.shift()
while(command != undefined){
    if(command === 'chop'){
        num = num/2
    }else if(command === 'dice'){
        num = Math.sqrt(num)
    }else if(command === 'spice'){
        num++
    }else if(command === 'bake'){
        num = num * 3
    }else if(command === 'fillet'){
        num = num * 0.8
    }
    console.log(num);
    command = rest.shift()
}
}
solve('9', 'dice', 'spice', 'chop', 'bake',

'fillet')