import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 28px;
    font-weight: 600;
    padding: 40px 0px;
    text-align: center;
    text-transform: capitalize;
`

const SectionTitle = props => {
    return (
        <Title className="text-black">{props.text}</Title>
    )
}

export default SectionTitle
