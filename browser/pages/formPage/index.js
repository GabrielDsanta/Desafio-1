const brandCar = document.querySelector('#brand')
const modelCar = document.querySelector('#model')
const yearCar = document.querySelector('#year')
const plaqueCar = document.querySelector('#plaque')
const colorCar = document.querySelector('#color')
const photoCar = document.querySelector('#photo')
const buttonSubmit = document.querySelector('button')


buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    const newCarToJSON = {
        "brand": brandCar.value,
        "model": modelCar.value,
        "year": yearCar.value,
        "plaque": plaqueCar.value,
        "color": colorCar.value,
        "photo": photoCar.value,
    }

    fetch('https://apigenerator.dronahq.com/api/XWgpdXon/CarrosCadastrados', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCarToJSON),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success', data)
    })
    .catch((error) => {
        console.log('Error', error)
    })

})