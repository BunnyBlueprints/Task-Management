import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, filter, onFilterChange }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="task-list-container">
      <div className="task-list-header">
        <h2>Tasks ({filteredTasks.length})</h2>
        
        <div className="filter-buttons">
          <button 
            onClick={() => onFilterChange('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All
          </button>
          <button 
            onClick={() => onFilterChange('pending')}
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          >
            Pending
          </button>
          <button 
            onClick={() => onFilterChange('completed')}
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="no-tasks">
            <p>No tasks found. {filter !== 'all' && 'Try changing the filter or'} Add a new task to get started!</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <TaskItem 
              key={task._id} 
              task={task} 
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;