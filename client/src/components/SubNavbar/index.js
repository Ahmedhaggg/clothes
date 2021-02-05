import React from 'react'
import styled from 'styled-components'
const Content = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #dddddd;
    background-color: #353535;
    .web-lang {
        border-right: 1px solid #ddd;
    };
`;

const  SubNavbar = () => {
    return (
        <Content>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 text-center py-2">
                        We specialized in selling clothes
                    </div>
                    <div className="col-6 text-center">
                        <span className="pr-3 d-inline-block web-lang py-2">English</span>
                        <span className="pl-3 d-inline-block py-2">USD</span>
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default SubNavbar
