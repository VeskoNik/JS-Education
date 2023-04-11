function solve() {
    debugger
    const task = document.getElementById('task')
    const description = document.getElementById('description')
    const date = document.getElementById('date')
    const add = document.getElementById('add').addEventListener('click', onClick)
    function onClick(event){
        debugger
        event.preventDefault()
        const taskInput = task.value;
        const descInput = description.value;
        const dateInput = date.value;
        if(!(taskInput === '' || descInput === '' || dateInput === '')){
            const firstDiv = document.querySelector('.orange')
            const parent = firstDiv.parentElement.parentElement;
            const [first,second] = Array.from(parent.children);
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.innerHTML = taskInput;
            article.appendChild(h3);
            const p1 = document.createElement('p')
            p1.innerHTML = `Description: ${descInput}`
            article.appendChild(p1)
            const p2 = document.createElement('p')
            p2.innerHTML = `Due Date: ${dateInput}`
            article.appendChild(p2)
            const div = document.createElement('div')
            div.className = 'flex'
            const button1 = document.createElement('button')
            button1.className = 'green';
            button1.innerHTML = 'Start';
            const button2 = document.createElement('button')
            button2.className = 'red';
            button2.innerHTML = 'Delete';
            div.appendChild(button1)
            div.appendChild(button2)
            article.appendChild(div)
            second.appendChild(article)
            button1.addEventListener('click', Start)
            button2.addEventListener('click', Delete)
            date.value = '';
            task.value = '';
            description.value = '';
            function Start(){
                debugger
                const div2 = document.querySelector('.yellow')
                const parent = div2.parentElement.parentElement;
                const [first2,second2] = Array.from(parent.children);
                const article2 = document.createElement('article');
                const tagHN2 = document.createElement('h3');
                tagHN2.innerHTML = h3.innerHTML
                article2.appendChild(tagHN2);
                const p3 = document.createElement('p')
                p3.innerHTML = p1.innerHTML
                article2.appendChild(p3)
                const p4 = document.createElement('p')
                p4.innerHTML = p2.innerHTML
                article2.appendChild(p4)
                const div3 = document.createElement('div')
                div3.className = 'flex'
                const button3 = document.createElement('button')
                button3.className = 'red';
                button3.innerHTML = 'Delete';
                const button4 = document.createElement('button')
                button4.className = 'orange';
                button4.innerHTML = 'Finish';
                div3.appendChild(button3)
                div3.appendChild(button4)
                article2.appendChild(div3)
                second2.appendChild(article2)
                button3.addEventListener('click', Delete2)
                button4.addEventListener('click', Finish)
                article.remove()
                function Delete2(){
                    article2.remove()
                }
                function Finish(){
                    const div5 = document.querySelector('.green')
                    const parent = div5.parentElement.parentElement;
                    const [first3,second3] = Array.from(parent.children);
                    const article3 = document.createElement('article');
                    const tagHN3 = document.createElement('h3');
                    tagHN3.innerHTML = tagHN2.innerHTML
                    article3.appendChild(tagHN3);
                    const p5 = document.createElement('p')
                    p5.innerHTML = p3.innerHTML
                    article3.appendChild(p5)
                    const p6 = document.createElement('p')
                    p6.innerHTML = p4.innerHTML
                    article3.appendChild(p6)
                    second3.appendChild(article3)
                    article2.remove()
                    }
                }
                function Delete(){
                    article.remove()
                }
                
            
        }

    }
    

}