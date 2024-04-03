import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskActions';

const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = e => {
        setTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (task.trim() === '') return;
        dispatch(addTask({ id: Date.now(), text: task }));
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a task..."
                value={task}
                onChange={handleInputChange}
                style={{ marginRight: '10px' }}
            />
            <button type="submit" className="custom-button">
                Add Task
            </button>
        </form>
    );
};

export default TaskInput;
