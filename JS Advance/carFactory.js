function solve(obj){
    let model = '';
    let engine = {};
    let wheels = []
const engines = {
    small: {
        power:90,
        volume:1800
    },
    normal: {
        power:120,
        volume:2400
    },
    monster:{
        power:200,
        volume:3500
    }
}
const carriage = {
    type: '',
    color: ''
}
const resultObj = {
    model,
    engine,
    carriage,
    wheels,
};
let wheel = 0;
resultObj.model = obj.model;
if(obj.power <= engines.small.power){
    resultObj.engine = engines.small
}else if(obj.power <= engines.normal.power){
    resultObj.engine = engines.normal
}else{
    resultObj.engine = engines.monster
}
carriage.type = obj.carriage
carriage.color = obj.color
resultObj.carriage = carriage
Number(obj.wheelsize) % 2 === 0 ? wheel = Number(obj.wheelsize) -1 : wheel = Number(obj.wheelsize);
wheels = [wheel,wheel,wheel,wheel];
resultObj.wheels = wheels
return resultObj;
}
solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)