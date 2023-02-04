function fishTank(input){
    let l = Number(input[0])
    let w = Number(input[1])
    let h = Number(input[2])
    let percentMatterials =  Number(input[3])


    let V = l*w*h
    let litres = 1 / 1000
    let litresInAquarium = V * litres
    let Matterials = litresInAquarium * (percentMatterials / 100)
    let totalLitres = litresInAquarium - Matterials
    console.log(totalLitres)
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)