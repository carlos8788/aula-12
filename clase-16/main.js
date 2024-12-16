
// function returnNombre(nombre){
//     console.log(`Hola mi nombre es: ${nombre}`)
// }

// // returnNombre('Luis');
// // returnNombre('Carlos');
// // returnNombre('Florencia');
// // returnNombre(true);

// // RETURN

// // return -> quiere decir retornar un tipo de dato

// function suma(a, b){
//     return a + b;
// }

// let resultado = suma(2, 3)

// console.log(resultado)

// let nombre = prompt('Escriba un nombre')
// console.log(nombre.toUpperCase())

// let resultado3 = 6 + 7 
// let resultado4 = 6 + 7 
// let resultado5 = 6 + 7 

// EJEMPLOS
// function returnNombreEnMayus(nombre){
//     let nombreEnMayus = nombre.toUpperCase();
//     return `Hola mi nombre es: ${nombreEnMayus}`
// }

// let oracion = returnNombreEnMayus('luis')
// console.log(oracion)

function informacionDelString(cadena){
    const datos = {
        longitud: cadena.length,
        primeraLetra: cadena.charAt(0),
        ultimaLetra: cadena.charAt(cadena.length - 1),
        enMayus: cadena.toUpperCase(),
        enMinus: cadena.toLowerCase()
    }

    return datos
}

// console.log(informacionDelString('hipopotamo'))
// console.log(informacionDelString('hipotalamo'))
// console.log(informacionDelString('hipotenusa'))

let palabraSecreta = 'mundo'

let intentos = 5

verificarLetra('o')
verificarLetra('ñ')
verificarLetra('ñ')
verificarLetra('ñ')
verificarLetra('ñ')
verificarLetra('ñ')

function verificarLetra(letra){

    let restarIntento = true

    for (let letter of palabraSecreta){
        if(letra === letter){
            console.log(`Encontraste una letra: ${letra}`)
            console.log(`Posición ${palabraSecreta.indexOf(letra) + 1}`)
            restarIntento = false
        }
    }

    if(restarIntento){
        console.log(`La letra ingresada "${letra}" no es correcta `)
        intentos--;
    }
    console.log(`Intentos restantes: ${intentos}`)
    if(intentos === 0){
        console.log('Perdiste')
    }
}


const funcionFlecha = () => {
    console.log('Hola mundo');
}

// funcionFlecha()

// IMPORTANCIONES
// VARIABLE Y CONSTANTES
// FUNCIONES 
// FUNCIÓN PRINCIPAL

// IMPORTACIONES SE VE MÁS ADELANTE
// VARIABLES Y CONSTANTES

let funcionAritmetica;
let numero1;
let numero2;

function suma(num1, num2){
    return num1 + num2
}

const resta = (num1, num2) => num1 - num2

function verificarDatos(){
    const option = prompt('1)Sumar\n2)Restar')
    if(option !== '1' && option !== '2'){
        console.log('No eligió una opción válida')
        return 
    }
    numero1 = Number(prompt('Ingresar un número'))
    numero2 = Number(prompt('Ingresar otro número'))
    if(option === '1'){
        console.log(suma(numero1, numero2))
    }
    else if(option === '2'){
        console.log(resta(numero1, numero2))
    }
}

function main(){
    verificarDatos();
}

main()