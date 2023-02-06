function lunchBreak(input){
    let movieName = input[0]
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])

    let lunch = 1/8 * breakDuration
    let relaxTime = 1/4 * breakDuration
    let leftTime = breakDuration - (lunch + relaxTime)
    if (leftTime >= episodeDuration) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(episodeDuration - leftTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones","60","96"])