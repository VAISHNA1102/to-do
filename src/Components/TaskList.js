import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, deleteAllTasks } from '../store/taskActions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();
    const handleDelete = taskId => {
        dispatch(deleteTask(taskId));
    };
    const handleDeleteAll = () => {
        tasks.forEach(task => dispatch(deleteTask(task.id)));
        dispatch(deleteAllTasks());
    };

    return (
        <div>
            <h2>Tasks</h2>
            {tasks.length > 0 && (
                <button onClick={handleDeleteAll} className="custom-button">Delete All</button>
            )}
            <ul> 
                {tasks.map(task => (
                    <li key={task.id}> 
                        {task.text}
                        <button onClick={() => handleDelete(task.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
