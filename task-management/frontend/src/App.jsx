import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getAllTasks, createTask, updateTask, deleteTask } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllTasks();
      setTasks(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      setError(null);
      const response = await createTask(taskData);
      setTasks(prev => [response.data, ...prev]);
      showSuccess('Task created successfully!');
    } catch (err) {
      setError(err.message || 'Failed to create task');
    }
  };

  const handleUpdateTask = async (taskData) => {
    try {
      setError(null);
      const response = await updateTask(editingTask._id, taskData);
      setTasks(prev => prev.map(task => 
        task._id === editingTask._id ? response.data : task
      ));
      setEditingTask(null);
      showSuccess('Task updated successfully!');
    } catch (err) {
      setError(err.message || 'Failed to update task');
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        setError(null);
        await deleteTask(id);
        setTasks(prev => prev.filter(task => task._id !== id));
        showSuccess('Task deleted successfully!');
      } catch (err) {
        setError(err.message || 'Failed to delete task');
      }
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleSubmit = (taskData) => {
    if (editingTask) {
      handleUpdateTask(taskData);
    } else {
      handleCreateTask(taskData);
    }
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Task Manager</h1>
        <p>Organize your tasks efficiently</p>
      </header>

      <main className="app-main">
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <TaskForm 
          onSubmit={handleSubmit}
          editTask={editingTask}
          onCancelEdit={handleCancelEdit}
        />

        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList 
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            filter={filter}
            onFilterChange={setFilter}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Built with MERN Stack</p>
      </footer>
    </div>
  );
}

export default App;