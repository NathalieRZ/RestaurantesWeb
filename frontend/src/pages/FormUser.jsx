import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'

function submitRegistration(){}

export function FormUser() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div class='container'>
            <br/>
            <center>
            <div class='abs-center'>
                <Card style={{ width: '18rem', background: '#B3F5CC' }}>
                    <Card.Body>
                        <Card.Title>Regístrate</Card.Title>
                        <Form onSubmit={e => submitRegistration(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="nombre@ejemplo.com" value={email} required={true} onChange={e => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" placeholder="Usuario" value={username} required={true} onChange={e => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" value={password} required={true} onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>      
            </center>
        </div>
    )
}