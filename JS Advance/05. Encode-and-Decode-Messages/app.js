function encodeAndDecodeMessages() {
const [sendText,recieveText] = Array.from(document.querySelectorAll('textarea'));
const buttons = Array.from(document.querySelectorAll('button'))
.forEach(button => {
    button.addEventListener('click', onClick)
});
function onClick(event){
    const clicked = event.target
    if(clicked.innerHTML === 'Encode and send it'){
    encode(event)
    }else{
        decode(event)
    }
}
function encode(){
    let encodedMessage = ''
    const text = sendText.value
    for(let i = 0;i<text.length ; i++){
        debugger
        let char = text[i].charCodeAt()+1
        let result = String.fromCharCode(char)
        encodedMessage+= `${result}`
    }
    sendText.value = sendText.textContent
    recieveText.value = encodedMessage
}
function decode(){
    let decodedMessage = ''
    const text = recieveText.value
    for(let i = 0;i<text.length;i++){
        const char = text[i].charCodeAt()-1
        const result = String.fromCharCode(char)
        decodedMessage+= `${result}`
    }
    recieveText.value = decodedMessage
}
}