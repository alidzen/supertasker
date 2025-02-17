import { useAppSelector } from '../store';
import Task from './task';

const TaskList = () => {
  const tasks = useAppSelector(state => state.tasks.enteties)

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
