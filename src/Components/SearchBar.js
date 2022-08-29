import { useState } from "react";

//as you can see that we are using destructring to receive function from parent component. 
const SearchBar = ({addTodo}) => {

    const [taskValue,setTaskValue] =  useState("red");

    const SaveValue = e =>{
        setTaskValue(e.target.value);
        if(e.key === 'Enter'){
            let EnteredTask = e.target.value;
            e.target.value = '';
            addTodo(EnteredTask);
            setTaskValue('');
        }
    }

    return (
        <>
            <div className="container mt-lg-3">
                <input className="form-control" placeholder="Enter Your Daily Task" autoFocus onKeyUp={SaveValue}></input>
            </div>
        </>
    );
}

export default SearchBar;
