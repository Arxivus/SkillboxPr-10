const list = document.querySelector('.list');

const delButton = document.querySelector('.delElement');
const addButton = document.querySelector('.addElement');

addButton.addEventListener('click', function() {
    const listElement = document.createElement('li'); 
    listElement.textContent = 'Новый элемент списка'

    list.appendChild(listElement)
})

delButton.addEventListener('click', function() {
    
    list.removeChild(list.lastElementChild)
})