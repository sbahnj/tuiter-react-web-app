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
        },
    }
});
export const {addTodo} = todosSlice.actions
export default todosSlice.reducer


