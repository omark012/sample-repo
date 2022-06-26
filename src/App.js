import { useState } from 'react';
import Header from './MyComponents/Header';
import Tasks from './MyComponents/Tasks';
import AddTask from './MyComponents/AddTask';
import Footer from './MyComponents/Footer';
import TaskDetails from './MyComponents/TaskDetails';
import About from './About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor appointment',
      date: 'Jan 5th at 5:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Car Wash',
      date: 'April 15th at 3:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      date: 'Mar 23rd at 4:30pm',
      reminder: false,
    }
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
      return (task.id !== id);
    }))
  }

  const toggleReminder = (id) => {

    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <BrowserRouter>
      <div className="container">

        <Header
          setShowAddTask={setShowAddTask}
          showAdd={showAddTask}
        />
        <Routes>
          <Route path='/' element={<>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder} />)
              : (
                <h3 className='empty'>No Task to Show</h3>)}
          </>} />

          <Route path='/About' element={<About />} />
          <Route path='/task/:id' element={<TaskDetails tasks={tasks} />} />
          <Route path='*' element={<>
          <h3>Page not found</h3>
          </>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
