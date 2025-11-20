const TaskItem = ({ task, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3>{task.title}</h3>
        <span className={`status-badge ${task.status}`}>
          {task.status}
        </span>
      </div>
      
      <p className="task-description">{task.description}</p>
      
      <div className="task-footer">
        <div className="task-dates">
          <small>Created: {formatDate(task.createdAt)}</small>
          {task.updatedAt !== task.createdAt && (
            <small>Updated: {formatDate(task.updatedAt)}</small>
          )}
        </div>
        
        <div className="task-actions">
          <button 
            onClick={() => onEdit(task)} 
            className="btn btn-edit"
          >
            Edit
          </button>
          <button 
            onClick={() => onDelete(task._id)} 
            className="btn btn-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;