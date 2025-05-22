const container = document.querySelector('.container');

let users = '';
fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const userDiv = document.createElement('div')
            userDiv.textContent = user.name
            container.append(userDiv)
            users += `<div>${user.name}</div>`
        })
        // console.log(users)
        const h2 = document.createElement('h2')
        h2.textContent = 'Usuarios'
        container.innerHTML = users
        // container.before(h2)
    })
    .catch(error => {
        console.log(error)
        container.innerText = '<h1 style="color:red;">Error al cargar los usuarios</h1>'
    })
