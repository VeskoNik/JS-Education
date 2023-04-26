function create(words) {
    const display = document.getElementById('content')
    for (const el of words) {
        const div = document.createElement('div')
        div.addEventListener('click' , onClick)
        const p = document.createElement('p')
        p.textContent = el
        p.style.display = 'none'
        div.appendChild(p)
        display.appendChild(div)
        
    }
    function onClick(event){
       let click = event.target.querySelector('p')
       click.style.display = 'block'
    }

}