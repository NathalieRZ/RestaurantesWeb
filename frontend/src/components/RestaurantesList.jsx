import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'



import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../api/restaurantes.api'


export function RestaurantesList() {
    const [restaurantes, setRestaurante] = useState([])
    useEffect(() => {
        async function loadRestaurantes() {
            const res = await getAllRestaurants()
            setRestaurante(res.data)
        }
        loadRestaurantes()
    }, []);
    return (
        <div>
            <br/>
            <p>Este sitio muestra una lista de restaurantes de diferentes tipos a los que puedes acudir dentro de la Ciudad de México.</p>
            
            {restaurantes.map(restaurante => (
                <div key={restaurante.id}>
                    <br/>
                <Card className='cardRest' style={{background: 'rgb(179, 245, 204)'}}>
                    <Card.Header as="h5">{restaurante.nombre}</Card.Header>
                    <Card.Body>
                        <Card.Title>Tipo: {restaurante.tipo}</Card.Title>
                        <Card.Text>
                        Dirección: {restaurante.direccion} <br/>
                        Teléfono: {restaurante.telefono}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                </div>
                
            ))}
        </div>
    )
}