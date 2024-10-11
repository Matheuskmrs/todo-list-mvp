
import React, { useState, useEffect } from 'react';
import './App.css';
import { TaskModel } from './Model';
import { TaskPresenter } from './Presenter';

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const model = new TaskModel();
        const view = {
            setAddTaskHandler: handler => (addTaskHandler.current = handler),
            setDeleteTaskHandler: handler => (deleteTaskHandler.current = handler),
            setToggleTaskHandler: handler => (toggleTaskHandler.current = handler),
            displayTasks: tasks => setTasks([...tasks])
        };
        const presenter = new TaskPresenter(model, view);
    }, []);

    const addTaskHandler = React.useRef();
    const deleteTaskHandler = React.useRef();
    const toggleTaskHandler = React.useRef();

    const handleAddTask = () => {
        if (addTaskHandler.current) {
            addTaskHandler.current(taskInput);
            setTaskInput('');
        }
    };

    const handleDeleteTask = id => {
        if (deleteTaskHandler.current) {
            deleteTaskHandler.current(id);
        }
    };

    const handleToggleTask = id => {
        if (toggleTaskHandler.current) {
            toggleTaskHandler.current(id);
        }
    };

    return (
        <div className="App">
            <h1>Lista de tarefas</h1>
            <input
                type="text"
                value={taskInput}
                onChange={e => setTaskInput(e.target.value)}
                placeholder="Adicionar nova tarefa"
            />
            <button onClick={handleAddTask}>Adicionar tarefa</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => handleToggleTask(task.id)}>
                            {task.completed ? 'Desfazer' : 'Feito'}
                        </button>
                        <button onClick={() => handleDeleteTask(task.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
