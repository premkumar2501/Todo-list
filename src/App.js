// import Content from "./Functions/Content";
import AddItem from "./Functions/AddItem";
import Footer from "./Functions/Footer";
import Header from "./Functions/Header";
import TodoList from "./Functions/TodoList";
import React, { useState } from "react";
function App(){
    const [items , setItems] = useState(
        [
            {id:1,checked:false,value:'Practival completed'},
            {id:2,checked:false,value:'Study completed'},
            {id:3,checked:false,value:'Writing completed'},
            {id:4,checked:false,value:'Project completed'}
        ]
    )

    const inputChange = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked}:
        item)
        setItems(listItems)
    }
    const deleteItem = (id) => {
        const deleteList = items.filter((item) => item.id!==id)
        setItems(deleteList)
    }

    const[newItem , setNewItem] = useState('')

    const handleItem = (value) => {
        const id = items.length? items[items.length -1].id +1 : 1;
        const addData = {id,checked:false,value}
        const listDatas = [...items,addData]
        setItems(listDatas)
        localStorage.setItem('todo_list',JSON.stringify(listDatas))
        console.log('data', value)
    }

    const addnewItem = (e) => {
        console.log('item',newItem);
        e.preventDefault()
        if(!newItem) return;
        handleItem(newItem)
        setNewItem('')
    }
    return(
        <div>
            <Header/>
            <AddItem
                newItem = {newItem}
                setNewItem = {setNewItem}
                addnewItem={addnewItem}
            />
            {/* <Content/> */}
            <TodoList
                items = {items}
                inputChange = {inputChange}
                deleteItem = {deleteItem}
            />
            <Footer
                length = {items.length}
            />
        </div>
    )
}
export default App;