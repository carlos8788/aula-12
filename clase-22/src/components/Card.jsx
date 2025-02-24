function Card({ title, price, action, styles='', list=[] }) {
    return (
        <div className={`card mb-4 rounded-3 shadow-sm ${styles}`}>
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{title}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">${price}<small className="text-body-secondary fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {list.map((text, id) => <li key={id}>{text}</li>)}
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">{action}</button>
            </div>
        </div>
    )
}

export default Card