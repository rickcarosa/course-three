import { useState } from 'react';
import Todo from './Todo';

function UseRefExampleThree() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle
      </button>
    </div>
  );
}

export default UseRefExampleThree;
