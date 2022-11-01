import { URL_API } from "./APIConfig"
import axios from 'axios'
import { getUserByEmail } from './getApiInfo'
import Swal from 'sweetalert2';


export const registerUser = async (info) => {

    const response = await getUserByEmail(info.email);

    if (response.length) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El email ya existe',
        })

    } else {
        const { data } = await axios.post(`${URL_API}/users`, info)
        return data
    }
}