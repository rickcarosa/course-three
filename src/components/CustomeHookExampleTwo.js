import useLocalStorage from '../hooks/useLocalStorage';

function CustomeHookExampleTwo() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  // to store array in local storage
  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObj]);
  };

  return (
    <form onSubmit={onSubmit} className='w-50'>
      <div className='mb-3'>
        <label className='form-label'>Task</label>
        <input
          className='form-control'
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}

export default CustomeHookExampleTwo;
