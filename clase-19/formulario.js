const form = document.querySelector('form');
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    let p = document.querySelector('.name-error');

    if(!p){
        p = document.createElement('p');
        p.classList.add('name-error');
    }
    const errorName = document.querySelector('input[name="nombre"]');

    if(data.nombre.length < 8){
        p.style.color = 'red'
        p.textContent = 'La longitud del nombre es muy corta'
        
        errorName.after(p);
        setTimeout(()=> {
            p.textContent = ''
            if(p){

                p.remove();
            }
        }, 2000)
        throw new Error('La longitud del nombre es muy corta');
    }else{

        console.log('first')
        if(p){
            p.remove();
        }
        // p.style.display = 'none'
        const h3 = document.createElement('h3');
        h3.textContent = 'El Registro fue exitoso'
        
        document.body.append(h3)
        setTimeout(()=> {
            h3.textContent = ''
            if(h3){
                h3.remove();
            }
        }, 2000)
    }


})

