import { useEffect, useState } from "react";
import Card from "./Card";
import cards from "./data/tarjetas";

function Hero() {
    const [tarjetas, setTarjetas] = useState(cards)
    const [date, setDate] = useState('0');
    const [users, setUsers] = useState([])
    useEffect(()=> {
      fetch('https://665e0fe1e88051d604094a93.mockapi.io/users')
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

    const esPar = (numero) => numero % 2 === 0 ? 'bg-success':'bg-primary';

    return (
        <div className="position-relative">
            {/* {tarjetas.map((tarjeta, idx) => <Card key={idx} tarjeta={tarjeta}/>)}
            <ul>
                {
                    (users.length > 0) 
                    // Si es verdadero
                    ? users.map((user, idx) =><li key={idx} className={`${esPar(idx) } text-white`}>{user.name} - {user.curso}</li>) 
                    // Si es falso
                    : <h2>No hay usuarios a mostrar</h2>
                }
            </ul> */}
            <img src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700755867.jpg" className="img-fluid position-absolute start-0 top-0 z-n1" alt="..."></img>
            <h1 className="position-absolute top-0 start-50 translate-middle-x mt-2 fs-custom text-white">Mi PortFolio</h1>
            <h1 className="position-absolute top-0 start-50 translate-middle-x mt-2 fs-custom text-white">Mi PortFolio</h1>
        </div>
    )
}

export default Hero;