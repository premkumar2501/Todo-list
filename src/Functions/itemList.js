import React from "react";
import LineItem from "./LineItem";

const ItemList = ({items,inputChange,deleteItem}) => {
    return(
        <ul>
            {items.map((item) => (
                <LineItem
                    item = {item}
                    key = {item.id}
                    inputChange = {inputChange}
                    deleteItem = {deleteItem}
                />
            ))}
        </ul>
    )
}
export default ItemList;