import axios from 'axios'

const restaurantApi = axios.create({
    baseURL: "http://localhost:8000/api/"
})

export const getAllRestaurants = () => restaurantApi.get('index/restaurante/')
export const createUser = (usuario) => restaurantApi.post('registro/', usuario)
export const login = (usuario) => restaurantApi.post('login/', usuario)
export const usuarioIn = () => restaurantApi.get('usuario/')

