import Table from 'cli-table3';
import chalk from 'chalk';

const personas = [
    { nombre: 'Carolina', edad: 25, ciudad: 'Araya' }, 
    { nombre: 'Juan', edad: 30, ciudad: 'Pérez' }, 
    { nombre: 'Pedro', edad: 28, ciudad: 'Gómez' },
    { nombre: 'Ana', edad: 22, ciudad: 'López' },
    { nombre: 'Luis', edad: 35, ciudad: 'Fernández' },
    { nombre: 'María', edad: 27, ciudad: 'González' },
    { nombre: 'Javier', edad: 32, ciudad: 'Martínez' },
    { nombre: 'Sofía', edad: 29, ciudad: 'Rodríguez' },
    { nombre: 'Diego', edad: 31, ciudad: 'Torres' },
    { nombre: 'Valentina', edad: 26, ciudad: 'Ramírez' }
]

const table = new Table({
    head: [
        chalk.bold.blue.underline('Nombre'), 
        chalk.bold.blue('Edad'), 
        chalk.bold.blue('Ciudad')
    ],
    colWidths: [20, 10, 15],
})

const arrPersonas = personas.map(persona => {
    if(persona.edad >= 30) {
        return [persona.nombre, chalk.red(persona.edad), chalk.red(persona.ciudad)]
    }else{
        return Object.values(persona)
    }
})

// const arrPersonas = personas.map(persona => (persona.edad >= 30) 
//                                                 ? [persona.nombre, chalk.red(persona.edad), chalk.red(persona.ciudad)] 
//                                                 : Object.values(persona)
//                                         )

table.push(...arrPersonas)

console.log(table.toString())
