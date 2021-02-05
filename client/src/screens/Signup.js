import React , {useState, useEffect} from 'react'
import { Link , Redirect } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../components/Ui/Input'
import SectionTitle from '../components/Ui/sectionTitle'
import axios from 'axios'
import {API_URL} from '../constants' 
// import axios from 'axios'
const Button = styled.button`
    width: 50%;
    font-size: 19px;
    font-weight: 600;
    padding: 10px 0px;
` 

const  Signin = () => {
    const [city, setCity] = useState("cairo")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName , setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("male")
    const [errs, setErrs] = useState([])
    const [ firstNameErr, setFirstNameErr ] = useState(false)
    const [ lastNameErr, setLastNameErr ] = useState(false)
    const [ userNameErr, setUserNameErr ] = useState(false)
    const [ emailErr, setEmailErr ] = useState(false)
    const [ passwordErr, setPasswordErr ] = useState(false)
    const [ genderErr, setGenderErr ] = useState(false)
    const [ cityErr, setCityErr ] = useState(false)
    const [ signupErr, setSignupErr] = useState({})
    const [ success , setSuccess ] = useState(false)
    const [ disabled, setDisabled ] = useState(false)
    const handelSubmit =  e => {
        e.preventDefault();
        setDisabled(true)
        const data = {firstName, lastName, userName, email, password, gender, city}
        axios.post( API_URL + 'signup', data)
        .then(response => { 
            setTimeout(() => {
                setSuccess(true)
            }, 2000)
        })
        .catch(error => {
            let err = error.response.data.err
            if (Array.isArray(err)) setErrs(err)
            else setSignupErr(error.response.data)
            setTimeout(() => setDisabled(false), 1000)
        });
    };
    useEffect( () => {
        errs.find( async err =>  await err.param === "firstName" ? setFirstNameErr(err): false)
        errs.find( async err => await  err.param === "lastName" ? setLastNameErr(err): false);
        errs.find( async err => await  err.param === "userName" ? setUserNameErr(err): false);
        errs.find( async err => await  err.param === "email" ? setEmailErr(err): false);
        errs.find( async err => await  err.param === "password" ? setPasswordErr(err): false);
        errs.find( async err => await  err.param === "gender" ? setGenderErr(err): false);
        errs.find( async err => await  err.param === "city" ? setCityErr(err): false);

    }, [errs])
    
    return (
        <div className="container">
            <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1 mt-5">
                <SectionTitle text="signin"/>
                <form method="GET" action="/" onSubmit={handelSubmit}>
                    <Input placeholder="First Name" type="text" onChange={ e => { 
                        setFirstName(e.target.value)
                        setFirstNameErr(false)
                    }}/>
                    {firstNameErr ? <p className="text-danger py-2">{firstNameErr.msg}</p>: false}
                    <Input placeholder="Last Name" type="text" onChange={ e => { 
                        setLastName(e.target.value)
                        setLastNameErr(false)    
                    }}/>
                    {lastNameErr ? <p className="text-danger py-2">{lastNameErr.msg}</p>: false}
                    <Input placeholder="User Name" type="text" onChange={ e => { 
                        setUserName(e.target.value)
                        setUserNameErr(false)
                    }} />
                    {userNameErr ? <p className="text-danger py-2">{userNameErr.msg}</p>: false}
                    <select value={city} onChange={e => {
                        setCity(e.target.value)
                        setCityErr(false)
                    }}  className="form-control mb-3">
                        <option value="Cairo">Cairo</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Giza">Giza</option>
                        <option value="Beni suef">Beni suef</option>
                        <option value="Alfayoum">Alfayoum</option>
                        <option value="Mansoura">Mansoura</option>
                    </select>
                    {cityErr ? <p className="text-danger py-2">{cityErr.msg}</p>: false}
                    <Input placeholder="Email" type="text" onChange={e => {
                        setEmail(e.target.value)
                        setEmailErr(false)
                    }}/>
                    {emailErr ? <p className="text-danger py-2">{emailErr.msg}</p>: false}
                    <Input placeholder="Password" type="password" onChange={ e => {
                        setPassword(e.target.value)
                        setPasswordErr(false)
                    }}/>
                    {passwordErr ? <p className="text-danger py-2">{passwordErr.msg}</p>: false}

                    <select value={gender} onChange={ e => {
                        setGender(e.target.value)
                        setGenderErr(false)
                    }}  className="form-control mb-3">
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    {genderErr ? <p className="text-danger py-2">{genderErr.msg}</p>: false}
                    {signupErr.message ? <p className="alert alert-danger">{signupErr.message}</p> : false}
                    <Button className="btn back-blue text-white shadow-none ml-auto d-block mr-auto mt-4" type="submit" disabled={disabled}>Signin</Button>
                    { success ? <Redirect to="/signin" /> : false }
                </form>
                <div className="mt-4 text-center">Are you don't have account ? <Link to='/signin'>Signin</Link> </div>
            </div>
        </div>
    )
}

export default Signin
