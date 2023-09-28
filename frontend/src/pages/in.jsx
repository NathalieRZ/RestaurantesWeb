import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

//para el token enviado por el backend
axios.defaults.xsrfCookieNam = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

//Para una instancia de cliente con una url base
const cliente = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

function App() {
    const [count, setCount] = useState(0)
    const [currenUser, setCurrentUser] = useState()
    const [registrationToggle, setRegistrationToggle] =useState(false)
    const [email, setEmail] = useState('')
    const [user_name, setUser_name] = useState('')
    const [password, stePassword] = useState('')

    return (
        <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
        </>
    )
}

export default App
