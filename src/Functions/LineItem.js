import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const LineItem = ({item,inputChange,deleteItem}) => {
    return(
        <li>
            <input type="checkbox"
                checked = {item.checked} 
                onChange={() => inputChange(item.id)}/>
            <label
                style={(item.checked) ? 
                {textDecoration : 'line-through'} : null}>
                {item.value}
            </label>
            <FaRegTrashCan
                role="button"
                tabIndex="0" 
                onClick={() => deleteItem(item.id)}/>
        </li>
    )
}
export default LineItem;