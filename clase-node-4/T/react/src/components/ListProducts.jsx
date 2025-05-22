

const ListProducts = ({products=[], view}) => {

    return (
        <div className="w-75 m-auto mt-5">

            <div className='d-flex justify-content-center gap-4 flex-wrap'>
                {
                    products.map(product => {
                        return (
                            <div className="card" key={product.id} style={{width: '18rem'}}>
                                <div className="card-header">{product.nombre}</div>
                                <div className="card-body">{product.descripcion}</div>
                                <div className="card-footer d-flex justify-content-around align-items-center">
                                    <div className="">{product.precio}</div>
                                    <button className="btn btn-primary" onClick={() => view(product.id)}>Ver</button>
                                    <button className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ListProducts