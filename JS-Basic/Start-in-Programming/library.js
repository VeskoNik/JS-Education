function solve(input) {
    let index = 0;
    let searchedBook = input[index]
    index++
    let command = input[index]
    index++
    let booksCount = 0
    while (searchedBook != command) {
        
        if (command === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${booksCount} books.`);
            return ;

        } 
        booksCount++
        
         command = input[index]
         index++
    }
    console.log(`You checked ${booksCount} books and found it.`);


}
solve(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

