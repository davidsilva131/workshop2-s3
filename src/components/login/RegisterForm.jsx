import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import { registerUser } from "../../services/postUser";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import { redirectUser } from "../../utils/session";


function RegisterForm() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();

    // const inputs = [
    //     {
    //         fName: 'email',
    //         type: 'email',
    //         placeholder: 'Correo',
    //     },
    //     {
    //         fName: 'name',
    //         type: 'text',
    //         placeholder: 'Nombre'
    //     },
    //     {
    //         fName: 'password',
    //         type: 'password',
    //         placeholder: 'Contraseña'
    //     },
    //     {
    //         fName: 'address',
    //         type: 'text',
    //         placeholder: 'Dirección'
    //     },
    //     {
    //         fName: 'image',
    //         type: 'url',
    //         placeholder: 'URL Imagen'
    //     }
    // ]

    useEffect(() => {
        redirectUser(navigate)
    }, []);


    const onRegister = async (data) => {
        const response = await registerUser(data);
        console.log(response);

        if (response) {
            Swal.fire({
                icon: 'success',
                text: 'Registro exitoso',
            })
            navigate('/')
        }

    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onRegister)}>

                {/* {inputs.map((input, index) =>
                    <>
                        <div className="form__input">
                            <input placeholder={input.placeholder} type={input.type} {...register( {input} , { required: true })} />
                            {errors.email && <span>El correo es obligatorio</span>}
                        </div>
                    </>
                )} */}

                <div className="form__input">
                    <input placeholder="Correo" type="email" {...register("email", { required: true })} />
                    {errors.email && <span>El correo es obligatorio</span>}
                </div>
                <div className="form__input">
                    <input placeholder="Nombre" type="text" {...register("name", { required: true })} />
                    {errors.name && <span>El nombre es obligatorio</span>}
                </div>
                <div className="form__input">
                    <input placeholder="Contraseña" type="password" {...register("password", { required: true })} />
                    {errors.password && <span>La contraseña es obligatori</span>}
                </div>
                <div className="form__input">
                    <input placeholder="Dirección" type="text" {...register("address", { required: true })} />
                    {errors.address && <span>La dirección es obligatoria</span>}
                </div>
                <div className="form__input">
                    <input placeholder="Imagen" type="url" {...register("image", { required: true })} />
                    {errors.image && <span>La imagen es obligatoria</span>}
                </div>
                <Button type="submit" variant="contained" sx={{ backgroundColor: 'white', color: 'black', fontWeight: '800', ":hover": { backgroundColor: '#FE144C' } }}>Registrarse</Button>
                <div className="logUp">
                    <h3><Link to="/" className="logUp__register">Iniciar Sesión</Link></h3>
                </div>
            </form>
        </>
    )
}

export default RegisterForm;
