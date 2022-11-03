import React, { useContext } from "react";
import { UserContext } from "../../routes/Router";
import UserIcon from '@mui/icons-material/Person2Outlined';
import PasswordIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';

import { useForm } from "react-hook-form";
import { getUser } from "../../services/getApiInfo";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './Form.scss'

function Form() {
    const { setUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const login = async (data) => {
        const [response] = await Promise.all([getUser(data)]);
        console.log(response[0]);
        if (response.length) {
            setUser(response[0])
            navigate('/home')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La informacion que ingresó es incorrecta',
            })
        }
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(login)} >
                <div className="form__start">
                    <h2>Inicia sesión en tu cuenta</h2>
                    <span>Disfruta de la mejor Pizza creada para las personas amantes del Código</span>
                </div>
                <div className="form__input">
                    <UserIcon />
                    <input placeholder="Correo" type="email" {...register("email", { required: true })} />
                    {errors.email && <span>El email es obligatorio</span>}
                </div>
                <div className="form__input">
                    <PasswordIcon />
                    <input placeholder="Contraseña" type="password" {...register("password", { required: true })} />
                    {errors.password && <span>El password es obligatorio</span>}
                </div>
                <Button type="submit" variant="contained" sx={{ backgroundColor: 'white', color: 'black', fontWeight: '800' }}>Ingresar</Button>
                <h3>Restablecer contraseña</h3>
                <div className="logUp">
                    <h4>¿No tienes una cuenta?</h4>
                    <h3><Link to="/register" className="logUp__register">Regístrate aquí</Link></h3>
                </div>
            </form>
        </>
    )
}

export default Form;
