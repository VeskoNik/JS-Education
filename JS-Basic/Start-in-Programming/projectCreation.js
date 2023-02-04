function projectCreation(input){
    let name = input[0]
    let projects = Number(input[1])
    let workhours = 3 
    let calc = workhours * projects
    let str = `The architect ${name} will need ${calc} hours to complete ${projects} project/s.`
    console.log(str)
}
projectCreation(["George",4])