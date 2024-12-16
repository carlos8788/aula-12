// Arrays HOMOGENEOS
// let productosJavaScript = [
//     "Google Maps",
//     "Gmail",
//     "Facebook",
//     "Netflix",
//     "Visual Studio Code",
//     "Discord",
//     "Slack",
//     "Trello",
//     "Airbnb",
//     "Uber",
//     'Apple'
// ];

let holaMundo = 'Hola "mundo" '

let chauMundo = "Chau 'mundo' "
// console.log(holaMundo)
// console.log(chauMundo)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// ARRAYS HETEREGENEOS

let heterogeneo = ["Hola", 10, true]

// ARRAY que segun el cotexto puede ser heterogeneo o homogeneo
let arr = ['coca cola', 'pera', 'motociclista']

/**
 * OBJETOS
 */

let persona = {
    nombre: 'Pedro',
    mascotas: ['Sunny', 'Boby', 'Juana', 'Pelusa'],
    edad: 22,
    casado: false,
    apellido: {
        madre: 'Gimenez',
        padre: 'Alvarez'
    },
    deporteFavorito: null
}

// console.log(persona.nombre)
// console.log(persona['apellido']['madre'])
// console.log(persona.apellido.padre)
// console.log(persona.mascotas[3])

// console.log(persona.mascotas[4])


// METODOS DE ARRAY

let productosJavaScript = [
    "Google Maps",
    "Gmail",
    "Facebook",
    "Netflix",
    "Visual Studio Code",
    "Discord",
    "Slack",
    "Trello",
    "Airbnb",
    "Uber",
    'Apple'
];


console.log(productosJavaScript.join(' - '))