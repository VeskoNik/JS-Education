function solve(year,month,day){
  const newDate = new Date(year,month - 1,day -1)
  const nextYear = newDate.getFullYear()
  const nextMonth = newDate.getMonth() +1
  const prevDay = newDate.getDate()
  console.log(`${nextYear}-${nextMonth}-${prevDay}`);
  
}
solve(2016, 9, 30)