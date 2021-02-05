import React from 'react'
import { Item } from './style'
import { FiUser } from 'react-icons/fi'
const ListItem = (props) => {
    return (
        <li className="col-3 mb-4">
            <Item  backgroundColor={props.backgroundColor}>
                <div className="d-flex flex-column">
                    <span className="list-type">users</span>
                    <span className="list-number">2200</span>
                </div>
                <div className="text-right">
                    <FiUser className="text-right"></FiUser>
                </div>
            </Item>
        </li>
    )
}

export default ListItem
