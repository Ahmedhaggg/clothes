import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from './style'
const ListItem = (props) => {
    return (
        <li className="col-3 mb-4">
            <Link to={props.link} className="text-decoration-none">
                <Item  backgroundColor={props.backgroundColor}>
                    <div className="d-flex flex-column pb-4">
                        <span className="list-type">{props.text}</span>
                    </div>
                    <div className="text-right">
                        {props.children}
                    </div>
                </Item>
            </Link>
        </li>
    )
}

export default ListItem
