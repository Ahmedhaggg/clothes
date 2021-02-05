import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
const Landing = styled.div`
    height: 85vh;
    position: relative;
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .6);
        z-index: 2;
    };
    .form-control {
        width: 250px;
        border-radius: 0;
        border: none;
        @media (min-width: 576px) {
            width: 400px;
        };
    };
    .input-group .btn {
        border-radius: 0;
        border: none;
    };
` 
const LandingPage = () => {

    return (
        <Landing>
            <img src="/images/landing.jpg" className="w-100 h-100" />
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <h3 className="h1 text-violet text-center mb-3">NEW <span className="text-blue">Styles</span></h3>
                <div>
                    <form>
                        <div className="input-group input-group-lg mb-3">
                            <input type="text" className="form-control" placeholder="Ex: jacket"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary shadow-none" type="button"><FaSearch/></button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </Landing>
    )
}

export default LandingPage
