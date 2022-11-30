const readXlsxFile  =  require ( 'read-excel-file/node' ) 
const fs = require("fs")
const JsonCars = require('./doc/JsonCars.json')

const schema = {
    'Marca': {
        prop: 'brand',
    },

    'Modelo': {
        prop: 'model',
    },

    'Year': {
        prop: 'year',
    },

    'Plaque': {
        prop: 'plaque',
    },

    'Color': {
        prop: 'color',
    },

    'Photo': {
        prop: 'photo',
    }
}

JsonCars.shift()
readXlsxFile('./doc/Carros.xlsx').then((rows) => {
    for (let index = 1; index < rows.length; index++) {
        const brand = rows[index][0]
        const model = rows[index][1]
        const year = rows[index][2]
        const plaque = rows[index][3]
        const color = rows[index][4]
        const photo = rows[index][5]

        readXlsxFile ('./doc/Carros.xlsx',  { schema } ) . then ( ( { rows , errors } )  =>  { 
            errors . length  ===  0
        })

        const newCarToJSON = {
            brand: brand, 
            model: model , 
            year: year, 
            plaque : plaque, 
            color : color,
            photo : photo
        }
        JsonCars.push(newCarToJSON)

        fs.writeFile('JsonCars.json', JSON.stringify(JsonCars), err => {
            if (err) throw err
           
            console.log("Done writing")
        });
    }
})
