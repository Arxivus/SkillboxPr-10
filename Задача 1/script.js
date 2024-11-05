const image1 = document.querySelector(".first");
const image2 = document.querySelector(".second");
const image3 = document.querySelector(".third");

const viewBlock = document.querySelector('.big-img');

image1.addEventListener('click', function() {

})

image1.addEventListener('click', function() {
    viewBlock.innerHTML = ''
    const attr = image1.getAttribute('src')

    const bigImage = document.createElement('img'); 
    bigImage.setAttribute("src", `${attr}`)

    viewBlock.appendChild(bigImage)
})

image2.addEventListener('click', function() {
    viewBlock.innerHTML = ''
    const attr = image2.getAttribute('src')

    const bigImage = document.createElement('img'); 
    bigImage.setAttribute("src", `${attr}`)

    viewBlock.appendChild(bigImage)
})

image3.addEventListener('click', function() {
    viewBlock.innerHTML = ''
    const attr = image3.getAttribute('src')

    const bigImage = document.createElement('img'); 
    bigImage.setAttribute("src", `${attr}`)

    viewBlock.appendChild(bigImage)
})

