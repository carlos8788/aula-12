const Form = ({handleSubmitProduct}) => {

    return (
        <div className="w-50 m-auto mt-5">
            <form action="" className="d-flex flex-column gap-4 " onSubmit={handleSubmitProduct}>
                <input type="text" className="form-cotrol" placeholder="Nombre del producto" name="nombre" />
                <textarea name="descripcion" id="" rows={4} placeholder="Colocar descripción"></textarea>
                <input type="number" name="precio" min={0} placeholder="Colocar precio" />
                <button type="submit" className="btn btn-success">Crear Producto</button>
            </form >
        </div>
    )
}
export default Form

/**
 *     {
        nombre: "Cafetera",
        descripcion: "Cafetera automática con sistema de filtro avanzado y capacidad de 1.5 litros.",
        precio: 85.50
    },
 * 
 * 
 */