import { URL_API } from "./APIConfig"
import axios from 'axios'

export const postShop = async (info) => {
    const response = await axios.post(`${URL_API}/shopping`, info)
    return response
}