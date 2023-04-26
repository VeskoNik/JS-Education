function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'))
    const check = Array.from(document.querySelectorAll('input[value=unlock]'))
    buttons.forEach(button => {
        button.addEventListener('click', onClick)
        
    });
    function onClick(event){
        debugger
        const clicked = event.target
        const parent = clicked.parentElement
        const div = parent.querySelector('div')
        const checks = parent.querySelector('input[value=unlock]')
        if(checks.checked){
            if(clicked.textContent === 'Show more'){
            clicked.textContent = 'Hide it'
            div.style.display = 'block'
            }else{
            clicked.textContent = 'Show more'
            div.style.display = 'none'
            }
        }
            
    }
}