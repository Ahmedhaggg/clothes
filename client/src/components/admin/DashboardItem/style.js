import styled from 'styled-components';

export const Item = styled.li`
    padding: 15px; 
    background-color: ${props => props ?  props.backgroundColor: '#dddddd' };
    border-radius: 4px;
    color: #dddddd;
    .list-type {
        font-size: 20px;
        font-weight: 600;
    };
    svg {
        font-size: 30px;
    }
`