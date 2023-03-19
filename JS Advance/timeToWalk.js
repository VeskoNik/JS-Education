function solve(steps,footprints,speed){
let distanceInMeters = steps * footprints;
let speedInMetersPerSec = speed / 3.6;
let rest = Math.floor(distanceInMeters / 500) * 60;
let time = distanceInMeters / speedInMetersPerSec +rest;
let hours = Math.floor(time / 3600)
let min = Math.floor(time / 60)
let sec = Math.round(time % 60)

console.log(`${hours < 10 ? '0' : ''}${hours}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0': ''}${sec}`);
}
solve(2564, 0.70, 5.5)