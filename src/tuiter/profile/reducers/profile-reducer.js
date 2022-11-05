import {createSlice} from "@reduxjs/toolkit";

const initialTodos = [
    {
        firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
        profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
        do: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
        followingCount: 340,	followersCount: 223
    }


];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,

    reducers: {
        addTodo(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            });
            state.splice(0, 1)
        },

        deleteTodo(state, action) {
            const index = action.payload
            state.splice(index, 1)
        },

        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                todo._id === action.payload._id)
            todo.done = !todo.done
        }



    }


});
export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions
export default todosSlice.reducer




