import Swal from 'sweetalert2'
import Form from './Form'
import { useState } from 'react'

function Hero() {

    const [count, setCount] = useState(0)

    const showAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'No puede ser menor a cero',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }

    const incrementar = () => {
        setCount(count + 1) 
    }

    const disminuir = () => {
        if(count > 0){
            setCount(count - 1) 
        }else{
            showAlert()
        }
    }

    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                    <p className="col-lg-10 fs-1">Modificando</p>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <Form />
                </div>
            </div>
            <button onClick={showAlert} className='btn btn-danger'>Alert</button>
            <button onClick={incrementar}>Incrementar</button>
            <h1>{count}</h1>
            <button onClick={disminuir}>disminuir</button>
        </div>
    )
}

export default Hero