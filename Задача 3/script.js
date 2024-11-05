const prices = [100, 500, 250, 750, 300]
const pricesList = document.querySelector('.list');

function showPrices(array, list) {
    pricesList.innerHTML = ''
    array.forEach((price) => {
        const item = document.createElement('li')
        item.textContent = price
        list.appendChild(item)
    })
}

showPrices(prices, pricesList)

const buttonSortASC = document.querySelector('.sortASC'); 
const buttonSortDESC = document.querySelector('.sortDESC'); 

function sortASC() {
    prices.sort((a, b) => a - b)
    showPrices(prices, pricesList)
}

function sortDESC() {
    prices.sort((a, b) => b - a)
    showPrices(prices, pricesList)
}


buttonSortASC.addEventListener('click', sortASC)
buttonSortDESC.addEventListener('click', sortDESC)