function FormUser({ handleSubmit, formRef }) {

    return (
        <form className="mb-3 border p-4 rounded" onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" className="form-control" name="fecha" />
            </div>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" name="fullname" placeholder="Ingresá tu nombre completo" />
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Rol</label>
                <select name="role" id="role" className="form-control">
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                    <option value="invitado">Invitado</option>
                </select>
            </div>
            <div className="d-flex justify-content-between">
                <input type="submit" className="btn btn-primary" value={'Enviar'} />
                <input type="reset" className="btn btn-outline-secondary" value={'Limpiar'} />
            </div>
        </form>
    )
}

export default FormUser