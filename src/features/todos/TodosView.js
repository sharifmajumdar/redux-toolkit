import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todosSlice';

const TodosView = () => {
    const { isLoading, todos, error } = useSelector( (state) =>
        state.todos);    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);    

    return (
        <div>
            <h1>Todos App</h1>
            { isLoading && <h3>Loading...</h3> }
            { error && <h3>{ error }</h3> }
            <section>
                {
                    todos && todos.map( todo => {
                        return <article key={todo.id}>
                            <h3>{ todo.title }</h3>
                        </article>
                    })
                }
            </section>
        </div>
    );
};

export default TodosView;