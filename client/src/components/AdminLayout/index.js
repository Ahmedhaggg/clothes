import React from 'react'
import Dashboard from '../admin/Dashboard'
import styled from 'styled-components'
const SectionTitle = styled.h3`
    font-size: 28px;
    font-weight: 600;
    padding: 40px 0px;
`
const  Layout = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Dashboard />
                </div>
                <div className="col-10 mt-5">
                    <section>
                        <SectionTitle className="text-center text-violet">{props.title}</SectionTitle>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Layout
