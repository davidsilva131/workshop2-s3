import { URL_API } from "./APIConfig"
import axios from 'axios'

export const getUser = async (info) => {
    const { data } = await axios.get(`${URL_API}/users?email=${info.email}&&password=${info.password}`);
    return data;
}

export const getUserByEmail = async (email) => {
    const { data } = await axios.get(`${URL_API}/users?email=${email}`)

    if (data.length) {
        return data
    } else {
        return []
    }

}