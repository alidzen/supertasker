import { useState } from 'react';
import { addTask } from '../features/tasks-slice';
import { useAppDispatch } from '../store';

const CreateTask = () => {
  const [newTaskTitle, setnewTaskTitle] = useState('');
  const dispatch = useAppDispatch();

  return (
    <form
      className="create-task"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTask({ title: newTaskTitle }));
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input
          id="new-task-title"
          type="text"
          value={newTaskTitle}
          placeholder="Title"
          required
          onChange={(e) => setnewTaskTitle(e.target.value)}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
