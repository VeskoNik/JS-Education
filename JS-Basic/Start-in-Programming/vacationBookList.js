function vacationBookList(input){
    let pagesCount = Number(input[0])
    let readPagesForOneHour = Number(input[1])
    let daysCountForReadBook = Number(input[2])
    let spendTime = pagesCount / readPagesForOneHour
    let spendTimeForOneDay = spendTime / daysCountForReadBook
    console.log(spendTimeForOneDay)
}
vacationBookList(["212 ",
"20 ",
"2 "])
