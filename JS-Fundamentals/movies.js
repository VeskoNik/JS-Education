function solve(arr){
let movieArr =[]
for (const line of arr) {
    if(line.includes('addMovie')){
        let name = line.split('addMovie ')[1]
        movieArr.push({name})
    }else if(line.includes('directedBy')){
        let [name,director] = line.split(' directedBy ')
        let movie = movieArr.find(el => el.name === name)
        if(movie){
            movie.director = director
        }
    }else if(line.includes('onDate')){
        let [name,date] = line.split(' onDate ')
        let movie = movieArr.find(el => el.name === name)
        if(movie){
            movie.date = date
        }
    }
}
movieArr.forEach(element => {
    if(element.name && element.date && element.director){
    console.log(JSON.stringify(element));
    }
});
}
solve([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])