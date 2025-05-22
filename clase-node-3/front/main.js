
function fetchAllUser() {
    fetch('http://localhost:3000/users', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => console.log(data))

}

function fetchOneUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => console.log(data))
}


function createUser(data) {
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}


fetchAllUser()

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.target))

    createUser(data)
})