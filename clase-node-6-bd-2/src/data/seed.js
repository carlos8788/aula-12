import mongoose from "mongoose";
import connectToDB from "./connect.js";
import Author from "./models/Author.js";
import Book from "./models/Book.js";

const authors = [
    { name: "Gabriel García Márquez" },
    { name: "Isabel Allende" },
    { name: "Mario Vargas Llosa" },
    { name: "Julio Cortázar" },
    { name: "Jorge Luis Borges" },
    { name: "Laura Esquivel" },
    { name: "Carlos Ruiz Zafón" },
    { name: "Octavio Paz" },
    { name: "Pablo Neruda" },
    { name: "Roberto Bolaño" }
];

const booksData = [
    // Libros de Gabriel García Márquez
    { title: "Cien años de soledad", pages: 417 },
    { title: "El amor en los tiempos del cólera", pages: 368 },
    { title: "Crónica de una muerte anunciada", pages: 122 },
    { title: "El coronel no tiene quien le escriba", pages: 92 },
    { title: "Del amor y otros demonios", pages: 176 },
    { title: "Memoria de mis putas tristes", pages: 115 },
    { title: "El otoño del patriarca", pages: 271 },
    { title: "Relato de un náufrago", pages: 142 },
    { title: "La mala hora", pages: 185 },
    { title: "Los funerales de la Mamá Grande", pages: 148 },

    // Libros de Isabel Allende
    { title: "La casa de los espíritus", pages: 442 },
    { title: "Eva Luna", pages: 307 },
    { title: "Paula", pages: 384 },
    { title: "El plan infinito", pages: 336 },
    { title: "Hija de la fortuna", pages: 399 },
    { title: "Retrato en sepia", pages: 352 },
    { title: "La ciudad de las bestias", pages: 299 },
    { title: "El zorro", pages: 381 },
    { title: "Más allá del invierno", pages: 352 },
    { title: "Largo pétalo de mar", pages: 384 },

    // Libros de Mario Vargas Llosa
    { title: "La ciudad y los perros", pages: 382 },
    { title: "La casa verde", pages: 392 },
    { title: "Conversación en La Catedral", pages: 601 },
    { title: "La tía Julia y el escribidor", pages: 447 },
    { title: "La guerra del fin del mundo", pages: 531 },
    { title: "Historia de Mayta", pages: 310 },
    { title: "El hablador", pages: 235 },
    { title: "Lituma en los Andes", pages: 312 },
    { title: "La fiesta del chivo", pages: 518 },
    { title: "Travesuras de la niña mala", pages: 378 },

    // Libros de Julio Cortázar
    { title: "Rayuela", pages: 635 },
    { title: "Bestiario", pages: 165 },
    { title: "Las armas secretas", pages: 142 },
    { title: "Todos los fuegos el fuego", pages: 197 },
    { title: "62 / Modelo para armar", pages: 260 },
    { title: "La vuelta al día en ochenta mundos", pages: 346 },
    { title: "Historias de cronopios y de famas", pages: 155 },
    { title: "Un tal Lucas", pages: 158 },
    { title: "Libro de Manuel", pages: 387 },
    { title: "Último round", pages: 325 },

    // Libros de Jorge Luis Borges
    { title: "Ficciones", pages: 174 },
    { title: "El Aleph", pages: 146 },
    { title: "El libro de arena", pages: 132 },
    { title: "Historia universal de la infamia", pages: 136 },
    { title: "El informe de Brodie", pages: 124 },
    { title: "El hacedor", pages: 159 },
    { title: "Elogio de la sombra", pages: 107 },
    { title: "El otro, el mismo", pages: 152 },
    { title: "Historia de la eternidad", pages: 114 },
    { title: "Inquisiciones", pages: 145 },

    // Libros de Laura Esquivel
    { title: "Como agua para chocolate", pages: 245 },
    { title: "La ley del amor", pages: 287 },
    { title: "Tan veloz como el deseo", pages: 198 },
    { title: "Malinche", pages: 207 },
    { title: "A Lupita le gustaba planchar", pages: 176 },
    { title: "El diario de Tita", pages: 153 },
    { title: "Mi negro pasado", pages: 187 },
    { title: "Escribiendo la nueva historia", pages: 165 },
    { title: "Íntimas suculencias", pages: 192 },
    { title: "El libro de las emociones", pages: 178 },

    // Libros de Carlos Ruiz Zafón
    { title: "La sombra del viento", pages: 575 },
    { title: "El juego del ángel", pages: 667 },
    { title: "El prisionero del cielo", pages: 379 },
    { title: "El laberinto de los espíritus", pages: 925 },
    { title: "Marina", pages: 272 },
    { title: "El príncipe de la niebla", pages: 238 },
    { title: "El palacio de la medianoche", pages: 251 },
    { title: "Las luces de septiembre", pages: 251 },
    { title: "La ciudad de vapor", pages: 232 },
    { title: "El cementerio de los libros olvidados", pages: 304 },

    // Libros de Octavio Paz
    { title: "El laberinto de la soledad", pages: 351 },
    { title: "El arco y la lira", pages: 305 },
    { title: "Libertad bajo palabra", pages: 234 },
    { title: "Piedra de sol", pages: 109 },
    { title: "Los hijos del limo", pages: 226 },
    { title: "Posdata", pages: 156 },
    { title: "El mono gramático", pages: 143 },
    { title: "Conjunciones y disyunciones", pages: 176 },
    { title: "Sor Juana Inés de la Cruz", pages: 215 },
    { title: "La llama doble", pages: 223 },

    // Libros de Pablo Neruda
    { title: "Veinte poemas de amor y una canción desesperada", pages: 96 },
    { title: "Residencia en la tierra", pages: 208 },
    { title: "Canto general", pages: 432 },
    { title: "Odas elementales", pages: 244 },
    { title: "Memorial de Isla Negra", pages: 301 },
    { title: "Confieso que he vivido", pages: 472 },
    { title: "Los versos del capitán", pages: 151 },
    { title: "Cien sonetos de amor", pages: 136 },
    { title: "Estravagario", pages: 183 },
    { title: "Navegaciones y regresos", pages: 198 },

    // Libros de Roberto Bolaño
    { title: "Los detectives salvajes", pages: 623 },
    { title: "2666", pages: 1125 },
    { title: "Nocturno de Chile", pages: 154 },
    { title: "Estrella distante", pages: 176 },
    { title: "Amuleto", pages: 154 },
    { title: "Putas asesinas", pages: 248 },
    { title: "El Tercer Reich", pages: 368 },
    { title: "La literatura nazi en América", pages: 242 },
    { title: "El gaucho insufrible", pages: 184 },
    { title: "Una novelita lumpen", pages: 151 },
];


const generateAuthors = async () => {
    const authorsIds = []
    for (const author of authors) {
        const result = await Author.create(author)
        authorsIds.push(result._id)
    }
    return authorsIds
}

const generateBooks = async (arrAuthorIds) => {
    for (let i = 0; i < arrAuthorIds.length; i++) {
        const startIndex = i * 10
        const authorBooks = booksData.slice(startIndex, startIndex + 10)

        for(const book of authorBooks){
            await Book.create({
                title: book.title,
                pages: book.pages,
                author: arrAuthorIds[i]
            })
            // await Book.create(Object.assign(book, {author: arrAuthorIds[i]}))
        }
    }
}

const clearDatabase = async () => {
    await Book.deleteMany({})
    await Author.deleteMany({})
}

const main = async () => {
    try {
        await connectToDB()
        await clearDatabase()
        const authorsIds = await generateAuthors()
        await generateBooks(authorsIds)

    } catch (error) {
        console.log(error)
    } finally {
        mongoose.connection.close()
        console.log('Conexión a la DB cerrada')
    }
}

main()