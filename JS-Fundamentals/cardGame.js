function solve(arr) {
    let result = {}
    for (const line of arr) {
        let [name, card] = line.split(': ')
        if (!result.hasOwnProperty(name)) {
            result[name] = []
        }
        let playerCards = card.split(', ')
        for (const el of playerCards) {
            if (!result[name].includes(el)) {
                result[name].push(el)
            }
        }
    }
    for (const key in result) {
        let sum = 0
        let cardArr = result[key]
        for (const el of cardArr) {
            let card = el.split('')
            let type = card.pop()
            let power = card.join('')
            if (isNaN(power)) {
                switch (power) {
                    case 'J': power = 11; break;
                    case 'Q': power = 12; break;
                    case 'K': power = 13; break;
                    case 'A': power = 14; break;
                }
            }
            if (isNaN(type)) {
                switch (type) {
                    case 'S': type = 4; break;
                    case 'H': type = 3; break;
                    case 'D': type = 2; break;
                    case 'C': type = 1; break;

                }
            }
            sum+= power * type
        }
    console.log(`${key}: ${sum}`);
    }
}
solve([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])