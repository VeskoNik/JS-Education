function solve(arr,str){
    function asc(){
        arr.sort((a,b)=> a-b)
    }
    function desc(){
        arr.sort((a,b)=> b-a)
    }
if(str === 'asc'){
    asc()
}else{
    desc()
}
return arr
}
solve([14, 7, 17, 6, 8], 'asc')