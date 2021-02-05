import styled from 'styled-components';

export const Item = styled.li`
    padding: 15px; 
    background-color: ${props => props ?  props.backgroundColor: '#dddddd' };
    border-radius: 4px;
    color: #dddddd;
    .list-type {
        font-size: 28px;
        font-weight: 600;
    };
    .list-number {
        font-size: 21px;
        font-weight: 500;
    }
    svg {
        font-size: 30px;
    }
`