function solve(input){
    let index = 0 
    let password = input[index]
    index++
    let newString = ''
    for (let i = password.length -1;i >=0 ; i--) {
        newString += password[i] ;
    }
    let rightPass = newString
    let count = 0 ;
    password = input[index]
    index++
    while (password != rightPass) {
        count++
        if(count >= 4) {
            console.log(`User ${input[0]} blocked!`);
            return ;
        }
        console.log('Incorrect password. Try again.');
        password = input[index]
        index++
        
    }
    console.log(`User ${input[0]} logged in.`);
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])