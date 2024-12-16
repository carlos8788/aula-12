// let edad = 21

const MAYORIA_DE_EDAD = 18

// let resultado = edad >= mayorEdad

// < menor
// > mayor
// console.log(resultado)

// if Si pasa esto (condición){
//  SE EJECUTA ESTE CÓDIGO
// }
// else SINO {
// ESTE OTRO CÓDIGO
// } 

// let edad = Number(prompt('Ingresá tu edad'))
// console.log()
// if(isNaN(edad)){ // SI
//     console.log('No es un número')
// }else if (edad <= 0){
//     console.log('El número ingresado no puede ser menor a 0')
// }else if(edad >= MAYORIA_DE_EDAD){ // SINO, SI
//     console.log('La persona es mayor de edad')
// }else{ // SI
//     console.log('La persona no es mayor de edad')
// }

// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')
// console.log('Hola mundo')

// i = 0;
// i = i + 1; 1
// i = i + 1; 2
// i = i + 1; 3
// i = i + 1; 4
// i = i + 1; 5
// i = i + 1; 6
// i +=1; 7
// i++; 8
for (let i = 0; i < 10; i++){
    console.log(`Hola mundo ${i}`)
}

const frutas = ['pera', 'limón', 'frutilla']

for (let fruta of frutas){
    console.log(fruta)
}

const persona = {
    nombre: 'Braulio',
    apellido: 'Robinson',
    edad: 54,
    nacionalidad: 'Brasilero',
    casado: true
}


for (let clave in persona){
    console.log(`${clave} ➡️ ${persona[clave]}`)
}

// EXTRA

const contenedor = document.querySelector('.contenedor')


for (let clave in persona){
    const h2 = document.createElement('h2')
    h2.textContent = `${clave} ➡️ ${persona[clave]}`
    contenedor.append(h2)
}

for (let fruta of frutas){
    const p = document.createElement('p')
    p.classList.add('array')
    p.textContent = fruta.toUpperCase()
    contenedor.append(p)
}