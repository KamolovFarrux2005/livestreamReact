import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.scss"
const Login = () => {
    const { state } = useLocation()
    const returnUrl = state?.returnUrl
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        email: "",
        password:""
    })
    const navigate = useNavigate()

    //fetch function for user

    const formOnSubmit = (event) => {
        event.preventDefault()

        fetch('https://reqres.in/api/login', {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-type":"application/json"
            }
        })
            .then(res => res.ok ? res.json() : Promise.reject(res)) //if there are some errors returns promise reject
            .then(res => {
                localStorage.setItem('token',res.token)
                if (returnUrl) {
                    navigate(`${returnUrl.pathname}${returnUrl.search}`, {
                        state: {
                            message:"Successfully logged in"
                        }
                    })
                } else {
                    navigate("/", {
                        state: {
                            message: "Successfully logged in"
                        }
                    })
                }
            })
            .catch(err => {
                setError("Try Again!")
            })


        

        // if login successfully set token and redirect home page
        
    }

    const handleChange = (event) => {
        setForm(state => {
        return {...state, [event.target.name]:event.target.value}
        })
    }

    useEffect(() => {
        console.log(form)
    }, [form])
    return (
        <div className='login'>
            <h2 className='login__title'>Film & TV</h2>
            <form className='login__form' onSubmit={formOnSubmit}>
                <input type="text" name='email' onChange={ handleChange } value={form.email} className='login__email' placeholder='Login'/>
                <input type="password"  onChange={ handleChange } name="password" value={form.password} className='login__password' placeholder='Password'/>
                <p className='login__error'>{error ? error : ""}</p>
                <button type='submit' className='login__submit'>Submit</button>
            </form>
        </div>
    );
}

export default Login;