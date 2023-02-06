function time(input){
    let num1 = Number(input[0])
    let num2 = Number(input[1])
    let hoursIntoMinutes = num1 * 60
    let time15Min = hoursIntoMinutes + num2 + 15
    let minutes = time15Min % 60
    let hours = Math.floor(time15Min / 60)

    if (hours > 23) {
        hours = 0
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    console.log(`${hours}:${minutes}`);
}
// function timePlus15Minutes(input) {
//     let inputHours = Number(input[0]);
//     let inputMinutes = Number(input[1]);
//     let hoursIntoMinutes = inputHours * 60;
//     let plus15Minutes = hoursIntoMinutes + inputMinutes + 15;
//     let hours = Math.floor(plus15Minutes / 60);
//     let minutes = plus15Minutes % 60;
 
//     if (hours > 23) {
//         hours = 0;
//     }
 
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
 
//     console.log(`${hours}:${minutes}`);
 
// }
time(["11" , "08"])