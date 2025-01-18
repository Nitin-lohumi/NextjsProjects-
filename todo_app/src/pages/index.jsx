import React, { useState, useEffect } from 'react';
import homes from '../styles/homes.module.css';

function Home() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('userTask')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('userTask', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    const newTask = {
      id: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }),
      text: task,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTask('');
  };
  function handleComplete(id) {
    setTasks(prev =>
      prev.map(v => (v.id === id ? { ...v, completed: true } : v))
    );
  }
  function handleDelete(id) {
    setTasks(prev => prev.filter(v => v.id !== id));
  }

  return (
    <>
      <div className={homes.todoapp}>
        <h1 className='p-2 text-center capitalize text-xl font-semibold'>
          List of Task For Small periods
        </h1>
        <div className='p-3 flex flex-col'>
          <input
            type='text'
            onChange={(e) => setTask(e.target.value)}
            value={task}
            placeholder='Enter your Task'
            className={homes.input}
          />
          <button
            className='text-xl text-white font-medium bg-green-600 mt-3 rounded'
            onClick={handleAdd}
          >
            Add
          </button>
          <span className='text-green-400 text-sm'>task added with Time Indian TimeZone</span>
        </div>
      </div>

      <div className={homes.displayTasks}>
        {tasks.length !== 0 ? (
          tasks.map((v) => (
            <div key={v.id} className='flex flex-col w-full  border p-2'>
              <h1 className='text-center text-2xl capitalize p-2 mt-2 mb-2 w-full'>{v.text}</h1>
              <div className='flex justify-around gap-4 w-full'>
                {v.completed === false ? (
                  <button
                    className={homes.button}
                    onClick={() => handleComplete(v.id)}
                    style={{ background: 'green' }}
                  >
                    complete
                  </button>
                ) : (
                  ''
                )}
                <button
                  className={homes.button}
                  onClick={() => handleDelete(v.id)}
                  style={{ background: 'red' }}
                >
                  delete
                </button>
                {v.completed === true ? (
                  <p className="text-green-700">completed successfully</p>
                ) : (
                  ''
                )}
              </div>
              <p className='text-end text-blue-800'>{v.id}</p>
            </div>
          ))
        ) : (
        <p className='mt-10'>No tasks added</p>
        )}
      </div>
    </>
  );
}

export default Home;
