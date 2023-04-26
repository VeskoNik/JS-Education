function solve() {
const [generateTextarea,buyTextarea] = Array.from(document.querySelectorAll('textarea'));
const tbody = document.querySelector('tbody');
const buttons = Array.from(document.querySelectorAll('button'))
.forEach(button => {
  button.addEventListener('click', onClick)
});
function onClick(event){
  const clicked = event.target;
  if(clicked.innerHTML === 'Generate'){
  const input = JSON.parse(generateTextarea.value);
  for (const el of input) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const img = document.createElement('img');
    img.src = el.img;
    td.appendChild(img);
    tr.appendChild(td);
    const td2 = document.createElement('td');
    const p = document.createElement('p');
    p.textContent = el.name;
    td2.appendChild(p);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    const p2 = document.createElement('p');
    p2.textContent = Number(el.price);
    td3.appendChild(p2);
    tr.appendChild(td3);
    const td4 = document.createElement('td');
    const p3 = document.createElement('p');
    p3.textContent = Number(el.decFactor);
    td4.appendChild(p3);
    tr.appendChild(td4);
    const td5 = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'checkbox' ;
    td5.appendChild(input);
    tr.appendChild(td5);
    tbody.appendChild(tr);
  };
  }else{
    let bought = []
    let totalPrice = 0
    let avgDecFactor = 0
    const check = Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(check => {
      if(check.checked){
        const parent = check.parentElement.parentElement
        const [text,price,decFac] = Array.from(parent.querySelectorAll('p'))
        bought.push(text.textContent)
        totalPrice += Number(price.textContent)
        avgDecFactor += Number(decFac.textContent)
      }
    });
    avgDecFactor = avgDecFactor/bought.length
    buyTextarea.value = `Bought furniture: ${bought.join(', ')}\rTotal price: ${totalPrice.toFixed(2)}\rAverage decoration factor: ${avgDecFactor}`
  };
};
}