import Axios from 'axios'
import { URL_DA_API } from './variaveis'

export const axios = Axios.create({
    baseURL: URL_DA_API
})