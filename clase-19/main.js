const h2 = document.querySelector('h2')

const data = {
    nombre: 'luis',
    profesion: 'desarrollador de software'
}
try {
    console.log(dat)
} catch (err) {
    console.error(err)
}
h2.innerText = 'Manejo de errores'

// let contador = 30

// setInterval(() => {
//     if( contador >= 0){
//         h2.textContent = contador
//         contador --;
//     }

// }, 1000)

h2.innerText = 'Cargando...'


// FUNCIONES DE ORDEN SUPERIOR

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const array2 = []
const array3 = []

for (let i=0; i<array.length; i++) {
    array2.push(array[i] * array[i])
}
console.log(array2)

for (let i of array) {
    array3.push(i * i)
}

console.log(array3)

const doble = (num) => num * num
const array4 = array.map(doble)
console.log(array4)