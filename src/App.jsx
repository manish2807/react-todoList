import React ,{useState} from "react";
import TodoList from "./TodoList";

const App = () => {
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);

    };


    const listItems= () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("")
    };

    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index!==id;
            });
        });

    };

    return(
    <>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>To Do List</h1>
            <br/>
            <input 
            type="text" 
            placeholder="Add a Item" 
            value={inputList}
            onChange={itemEvent}/>
            <button onClick={listItems}>+</button>
            <ol>
                {/* <li>{inputList}</li> */}
                {items.map((itemval, index) => {
                   return <TodoList key = {index} 
                   id = {index}
                   text={itemval}
                   onSelect = {deleteItems}
                   />
                })}
            </ol>
        </div>
    </div>
    </>
    );
};

export default App;