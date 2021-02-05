import React , { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../components/Ui/Input'
import SectionTitle from '../components/Ui/sectionTitle'
import axios from 'axios'
import {API_URL} from '../constants' 
import { Login } from '../actions/action'
const Button = styled.button`
    width: 50%;
    font-size: 19px;
    font-weight: 600;
    padding: 10px 0px;
`
const  Signin = () => {
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ validErr, setValidErr ] = useState([]);
    const [ signinErr, setSigninErr ] = useState(false);
    const [ emailErr , setEmailErr ] = useState(false);
    const [ passwordErr, setPasswordErr ] = useState(false)
    const [ success , setSuccess ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);
    const dispatch = useDispatch()
    const handelSubmit = e  => {
        e.preventDefault();
        setDisabled(true)
        const data = {email, password}
        axios.post( API_URL + 'signin', data)
            .then(response => {
                console.log(response.data.data)
                dispatch(Login(response.data))
                setTimeout(() => {
                    setSuccess(true)
                }, 1000)
            })
            .catch(error => {
                const err = error.response.data.err;
                if (Array.isArray(err)) setValidErr(err)
                else setSigninErr(error.response.data)
                setTimeout(() => setDisabled(false), 1000)
            })
    }
    useEffect(() => {
        validErr.find( async err => await  err.param === "email" ? setEmailErr(err): false);
        validErr.find( async err => await  err.param === "password" ? setPasswordErr(err): false);
    }, [validErr])
    return (
        <div className="container">
            <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mt-5">
                <SectionTitle text="signin"/>
                <form onSubmit={handelSubmit}>
                    <Input placeholder="Your Email" type="text" onChange={e => {
                        setEmail(e.target.value)
                        setEmailErr(false)
                    }}/>
                    {emailErr ? <p className="text-danger py-2">{emailErr.msg}</p>: false}
                    <Input placeholder="Your Password" type="password" onChange={e => {
                        setPassword(e.target.value)
                        setPasswordErr(false)
                    }}/>
                    {passwordErr ? <p className="text-danger py-2">{passwordErr.msg}</p>: false}
                    {signinErr ? <p className="alert alert-danger my-1">{signinErr.message}</p>: false}
                    <Button className="btn back-blue text-white shadow-none ml-auto d-block mr-auto mt-4" disabled={disabled}>Signin</Button>
                    {success ? <Redirect to="/" /> : false}
                </form>
                <div className="mt-4 text-center">Are you don't have account ? <Link to='/signup'>Signup</Link> </div>
            </div>
        </div>
    )
}

export default Signin
