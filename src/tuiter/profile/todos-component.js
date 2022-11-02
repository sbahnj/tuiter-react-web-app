import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {addTodo, deleteTodo, todoDoneToggle}
    from "./profile-reducer";
import todoSlice from "./profile-reducer";
import {Link} from "react-router-dom";



const Todos = () => {
    const todos
        = useSelector(state => state.todos);

    const [todo, setTodo] = useState({firstName: ''});

    const dispatch = useDispatch();

    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }





    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }


    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))

    }


    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            firstName: doValue
        };
        setTodo(newTodo);
    }



    return(
        <>

            <ul className="list-group">


                <li className="list-group-item" >

                    <Link to="/tuiter/profile2">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                          float-end">
                        Save</button>
                    </Link>


                    <input placeholder="Sarah"
                        onChange={todoChangeHandler}
                        value={todo.firstName}
                        className="form-control w-75"/>
                </li>

                {
                    todos.map((todo, index) =>
                        <li className="list-group-item" >



                            {todo.firstName}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;





