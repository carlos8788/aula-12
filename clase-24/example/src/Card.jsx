function Card({tarjeta}) {
  return (
    <div className="card">
        <h4>{tarjeta.title}</h4>
        <img src={tarjeta.image} alt={tarjeta.title} />
        <p>{tarjeta.description}</p>
        <a href={tarjeta.action_url} className={`${tarjeta.action_url?'green':'red'}`}>{tarjeta.action_text}</a>
    </div>
  )
}

export default Card