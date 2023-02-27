function solve(path){
    let element = path.split('\\').pop()
    let index = element.lastIndexOf('.')
    let extension = element.substring(index+1,)
    let name = element.substring(0,index)
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.bek.pptx')