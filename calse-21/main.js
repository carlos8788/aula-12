const btn = document.querySelector('button.btn.btn-success');
const divAlert = document.querySelector('div.alert-success');
const collapseThree = document.querySelector('[aria-controls="collapseThree"]')
const form = document.querySelector('form.form-modal');
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target))
    console.log(data);
    // data-bs-dismiss="modal"
    document.querySelector('button[type="submit"]').addEventListener('click', function () {
        this.setAttribute('data-bs-dismiss', 'modal');
        
    })
})

btn.addEventListener('click', () => {
    if(divAlert.classList.contains('d-none')){
        divAlert.classList.remove('d-none')
        setTimeout(()=> divAlert.classList.add('d-none'), 3000)
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
})

collapseThree.addEventListener('click', () => {

    Swal.fire({
        icon: "success",
        title: "Abriendo el menú 3",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
});
