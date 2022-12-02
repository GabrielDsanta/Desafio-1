const ImageCarousel = document.querySelector('#PhotoCarousel')
const NameCarousel = document.querySelector('h1')

const LeftArrow = document.querySelector('.LeftArrow')
const RightArrow = document.querySelector('.RightArrow')

const brandCar = document.querySelector('#brandTextContent')
const yearCar = document.querySelector('#yearTextContent')
const colorCar = document.querySelector('#colorTextContent')
const plaqueCar = document.querySelector('#plaqueTextContent')

fetch('../JsonCars.json').then(data => {
    return data.json()
})
.then(post => {
    const JSONCars = post
    let Counter = 0

    UpdateDisplay(Counter)

    RightArrow.addEventListener('click', (e) => {
        Counter >= 4 ? (Counter = 0):
        Counter++
        UpdateDisplay(Counter)
    })

    LeftArrow.addEventListener('click', (e) => {
        Counter == 0 ? (Counter = 4):
        Counter--
        UpdateDisplay(Counter)
    })

    function UpdateDisplay(Counter){
        ImageCarousel.src = JSONCars[Counter].photo
        NameCarousel.textContent = JSONCars[Counter].model
        brandCar.textContent = JSONCars[Counter].brand
        yearCar.textContent = JSONCars[Counter].year
        colorCar.textContent = JSONCars[Counter].color
        plaqueCar.textContent = JSONCars[Counter].plaque
    }
})

