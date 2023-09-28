import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import {useForm} from 'react-hook-form'

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submitLogin(){}

    return (
        <div class='container'>
            <br/>
            <center>
                <div class='abs-center'>
                    <Card style={{ width: '18rem', background: '#B3F5CC' }}>
                        <Card.Body>
                            <Card.Title>Iniciar Sesión</Card.Title>
                            <div className="center">
                                <Form onSubmit={e => submitLogin(e)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="usuario@ejemplo.com" value={email} onChange={e => setEmail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Iniciar
                                    </Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </center>
        </div>
    )
}