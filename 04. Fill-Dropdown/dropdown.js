function addItem() {
    const text = document.getElementById('newItemText')
    const value = document.getElementById('newItemValue')
    const option = document.createElement('option')
    option.textContent = text.value
    option.value = value.value
    const parent = document.getElementById('menu')
    parent.appendChild(option)
    value.value = ''
    text.value = ''
}