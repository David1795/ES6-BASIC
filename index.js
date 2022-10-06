

//importar el componente sumar commonjs


//importar el componente sumar module
//const sumar = require('./sumar')
//const estudiante =require('./estudiante')

const colors = require('colors');

const materias = require('./materias')

//recorrido

materias.forEach((materia)=>{

    if(materia.instructor === 'Cristian Buitrago'){
        console.log(`Nombre: ${materia.nombre}`.bgGray)
    }
    
    
})

//map: metodo de arreglo es6

const profesores =materias.map((materia)=>{
 return materia.instructor
})

console.log(profesores)


//find

const PHP = materias.find((materia)=>{
return materia.instructor === "Cristian Buitrago"
})

console.log(PHP)


//find

const PH = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
    })
    
    console.log(PHP)







//variables js

//let: variables 
//let a = 10

//const: variables 
//const b = 20




//desestructurar elemento

//let{first_name,last_name}=estudiante

//console.log(`nombre: ${first_name}`.bgGreen)

//console.log(`Apellido: ${last_name}`.bgMagenta)
