function solve(input) {
    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let arriveHour = Number(input[2])
    let arriveMinute = Number(input[3])

    let examTime = (examHour * 60) + examMinute
    let arriveTime = (arriveHour * 60) + arriveMinute
    let difference = examTime - arriveTime
    let differenceAriveEarlier = arriveTime - examTime
    let differenceHour = Math.trunc(difference / 60)
    let differenceMinute = difference % 60
    if (arriveTime === examTime) {
        console.log("On Time");
    } else if (difference >= 1 && difference <= 30) {
        console.log("On Time");
        console.log(`${difference} minutes before the start`);
    } else if (difference > 30 && difference <= 59) {
        console.log("Early");
        console.log(`${difference} minutes before the start`);
    } else if (difference >= 60) {
        if (differenceMinute % 60 < 10) {
            console.log("Early")
            console.log(`${differenceHour}:0${differenceMinute} hours before the start`);;

        } else {
            console.log("Early");
            console.log(`${differenceHour}:${differenceMinute} hours before the start`);
        }
    } else if (differenceAriveEarlier >= 1 && differenceAriveEarlier <= 59) {
        console.log("Late");
        console.log(`${Math.abs(differenceMinute)} minutes after the start`);
    } else if (differenceAriveEarlier >= 60) {
        if (Math.abs(differenceMinute % 60) < 10) {
            console.log("Late");
            console.log(`${Math.abs(differenceHour)}:0${Math.abs(differenceMinute)} hours after the start`);
        } else {
            console.log("Late");
            console.log(`${Math.abs(differenceHour)}:${Math.abs(differenceMinute)} hours after the start`);
        }
    }
}
solve(["9",
    "30",
    "9",
    "50"])

