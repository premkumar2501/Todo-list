

import ItemList from "./itemList"

const TodoList = ({items,inputChange,deleteItem}) => {
    
    return(
        <div className="todolist">
            {items.length ? (
                <ItemList
                    items = {items}
                    inputChange = {inputChange}
                    deleteItem = {deleteItem}
                />
            ) : (<h2>Your list is empty</h2>)}
        </div>
    )

}
export default TodoList;