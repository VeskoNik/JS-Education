function solve(arr){
    let newArr = arr.shift().split(' ').map(Number)
    let index = 0
    let nextEl = arr[index].split(' ')
    index++
    let command = nextEl[0]
    while(command !== 'end'){
        if(command === 'swap') {
            let a = newArr[(nextEl[1])]
            let b = newArr[(nextEl[2])]
            newArr[(nextEl[1])] = b
            newArr[(nextEl[2])] = a
        }else if(command === 'multiply'){
            let c = newArr[(nextEl[1])]
            let d = newArr[(nextEl[2])]
            newArr[nextEl[1]] = c * d
        }else if(command === 'decrease'){
            let decreaseArr = []
            for (const num of newArr) {
                let numAfterDecrease = num - 1
                decreaseArr.push(numAfterDecrease)
            }
            newArr = decreaseArr
        }
        nextEl = arr[index].split(' ')
        index++
        command = nextEl[0]
    }
    console.log(newArr.join(', '));
}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  )