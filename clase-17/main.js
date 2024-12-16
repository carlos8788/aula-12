// console.log(document.querySelector('#link'))
// console.log(document.querySelector('input[name="nombre"]'))
// const link = document.querySelector('#link')
// const inputs = document.querySelectorAll('input')
// console.log(inputs)
// link.addEventListener('click', () => {

//     link.href = 'https://www.youtube.com'
// })
// link.innerHTML = '<span class="red">Alguna otra cosa</span>'
// // link.textContent = 'Alguna otra cosa'
// // link.style.color = 'red'
// // link.classList.add('red')

const formulario = document.querySelector('form')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const datos = Object.fromEntries(new FormData(event.target))
    mostrarError(datos)
    // formulario.reset()
})


function mostrarError(obj) {
    const elementsErrors = document.querySelectorAll('.error')
    for (let element of elementsErrors){
        element.textContent = ''
    }

    for (let key in obj) {
        if (obj[key].trim().length < 3) {
            console.log(key)
            const elementSpan = document.querySelector(`.error-${key}`)
            elementSpan.textContent = `El ${key} debe tener más de 3 caracteres`
        }
    }
}