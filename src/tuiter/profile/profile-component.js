import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {addTodo}
    from "./reducers/profile-reducer";

const ToDos = () => {
    const todos
        = useSelector(state => state.todos);

    const [todo, setTodo] = useState({do: ''});

    const dispatch = useDispatch();




    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }


    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    function leaveEditMode() {

        document.getElementById("editProfile button").style.display = "block"
        document.getElementById("Input line").style.display = "none"
        document.getElementById("Save button").style.display = "none"
        document.getElementById("Edit Profile heading").style.display = "none"
        document.getElementById("Profile heading").style.display = "block"
        document.getElementById("close-x").style.display = "none"
        console.log("leave edit mode found")

    }

    function SaveAndExit() {

        createTodoClickHandler();
        leaveEditMode();

    }

    return(
        <>

            <ul className="list-group">


                <li className="list-group-item">


                    <button id="Save button" onClick={SaveAndExit}
                            className="btn btn-primary w-25
                          float-end">
                        Save</button>


                    <input  id = "Input line"
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75 display-1"/>
                </li>

                {
                    todos.map((todo, index) =>
                        <li className="list-group-item">






                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default ToDos;



