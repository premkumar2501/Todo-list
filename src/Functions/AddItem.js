import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const AddItem = ({addnewItem,newItem,setNewItem}) => {
    return(
        <form className="addItem" onSubmit={addnewItem}>
            <label htmlFor="AddItem"></label>
            <input
                type="text"
                placeholder="Add Item"
                autoFocus
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">
                <FaPlusCircle/>
            </button>
        </form>
    )
}
export default AddItem;