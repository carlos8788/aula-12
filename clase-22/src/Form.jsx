

function Button({titulo, className}) {
    return (
        <button className={className}>{titulo}</button>
    )
}

function Form() {
    return (
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" />
                    Remember me
                </label>
            </div>
            <Button titulo={'Iniciar sesión'} className={'w-100 btn btn-lg btn-success mb-3'}/>
            <Button titulo={'Cancelar'} className={'w-100 btn btn-lg btn-secondary'}/>
            <hr className="my-4" />
            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
    )
}

export default Form;