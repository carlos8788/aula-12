// const equipos = [
//     {
//         "url": "https://statics-files.tycsports.com/escudos/122.png",
//         "name": "Aldosivi"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/2.png",
//         "name": "Argentinos Juniors"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/815.png",
//         "name": "Atlético Tucumán"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/4.png",
//         "name": "Banfield"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/685.png",
//         "name": "Barracas Central"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/124.png",
//         "name": "Belgrano"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/5.png",
//         "name": "Boca Juniors"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/1485.png",
//         "name": "Central Córdoba (SE)"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/129.png",
//         "name": "Defensa y Justicia"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/788.png",
//         "name": "Dep. Riestra"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/7.png",
//         "name": "Estudiantes"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/8.png",
//         "name": "Gimnasia"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/132.png",
//         "name": "Godoy Cruz"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/100.png",
//         "name": "Huracán"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/10.png",
//         "name": "Independiente"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/664.png",
//         "name": "Independiente Riv. (M)"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/11.png",
//         "name": "Instituto"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/12.png",
//         "name": "Lanús"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/13.png",
//         "name": "Newell`s"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/489.png",
//         "name": "Platense"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/16.png",
//         "name": "Racing Club"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/17.png",
//         "name": "River Plate"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/18.png",
//         "name": "Rosario Central"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/19.png",
//         "name": "San Lorenzo"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/134.png",
//         "name": "San Martín (SJ)"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/142.png",
//         "name": "Sarmiento"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/135.png",
//         "name": "Talleres"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/136.png",
//         "name": "Tigre"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/137.png",
//         "name": "Unión"
//     },
//     {
//         "url": "https://statics-files.tycsports.com/escudos/20.png",
//         "name": "Vélez"
//     }
// ]
// // GRID JS
// const contenedorTabla = document.querySelector('.contenedor_tabla');
// new gridjs.Grid({
//     columns: ['Escudo', 'Equipo'],
//     data: equipos.map(equipo => [equipo.url, equipo.name]),
//     search: true,
//     className: {
//         td: 'td-custom',
//         table: 'custom-table'
//     }
// }).render(contenedorTabla)

// setTimeout(() => {
//     const contenedorImg = document.querySelectorAll('[data-column-id="escudo"]')
//     const arrayImgs = Array.from(contenedorImg)
//     arrayImgs.splice(0, 1)
//     arrayImgs.forEach(element => {
//         const img = document.createElement('img')
//         img.src = element.textContent
//         element.style.color = 'white'
//         element.append(img)
//     })

// }, 2000)

const ctx = document.querySelector('#myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie', // Tipo de gráfico: 'bar', 'line', 'pie', etc.
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart'
            }
        },
        
    },

});