# 📝 Task Management - MERN Stack Application

**Task Management** is a full-stack web application built with the MERN stack that enables users to efficiently create, organize, and manage their daily tasks with a modern, intuitive interface.
[![Live Demo](https://img.shields.io/badge/TASK_MANAGEMENT-LIVE_DEMO_-informational?style=for-the-badge&logo=amazonaws&logoColor=white&color=2bbc8a&labelColor=1a1a2e)](https://frontend-i6gnvrihv-vikas-singhs-projects-85a121fa.vercel.app/)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

---

## ✨ Project Overview

Task Manager is a responsive web application that provides a seamless task management experience. Users can:

- ✅ **Create Tasks** - Add new tasks with title, description, and status
- 📋 **View Tasks** - See all tasks in an organized, card-based layout
- ✏️ **Edit Tasks** - Update task details and change status (Pending/Completed)
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- 🔍 **Filter Tasks** - View tasks by status: All, Pending, or Completed
- ⚡ **Real-time Updates** - Instant feedback with success/error notifications
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile devices

The application features form validation, error handling, and a clean user interface with smooth animations.

---

## 🛠️ Tech Stack Used

### Frontend
- **React.js** - Component-based UI library for building interactive interfaces
- **Vite** - Next-generation frontend build tool for fast development
- **Axios** - Promise-based HTTP client for API communication
- **CSS3** - Modern styling with flexbox, grid, and animations

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Minimal and flexible web application framework
- **MongoDB** - NoSQL database for storing task data
- **Mongoose** - Elegant MongoDB object modeling for Node.js
- **CORS** - Cross-Origin Resource Sharing for API security
- **dotenv** - Environment variable management

### Development Tools
- **Nodemon** - Auto-restart server during development
- **Postman** - API testing and documentation
- **Git** - Version control system

---

## 🚀 How to Run Backend

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally OR MongoDB Atlas account
- npm (Node Package Manager)

### Step-by-Step Instructions

**1. Navigate to the backend directory:**
```bash
cd backend
```

**2. Install all dependencies:**
```bash
npm install
```

**3. Create a `.env` file in the backend folder:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskmanager
```

> **Note:** If using MongoDB Atlas, replace with your connection string:
> ```env
> MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager
> ```

**4. Start the backend server:**

For production:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

**5. Verify the server is running:**
- Backend will be live at: `http://localhost:5000`
- You should see: `Server is running on port 5000` and `MongoDB Connected`

---

## 🌐 How to Run Frontend

### Prerequisites
- Node.js (v14 or higher)
- Backend server must be running

### Step-by-Step Instructions

**1. Navigate to the frontend directory:**
```bash
cd frontend
```

**2. Install all dependencies:**
```bash
npm install
```

**3. Start the development server:**
```bash
npm run dev
```

**4. Access the application:**
- Frontend will be live at: `http://localhost:5173`
- Open your browser and navigate to the URL
- The application should automatically connect to the backend

**5. Build for production (optional):**
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

---

## 📡 API Endpoints

| Method | Endpoint          | Description           |
| ------ | ----------------- | --------------------- |
| POST   | `/api/tasks`      | Create a new task     |
| GET    | `/api/tasks`      | Get all tasks         |
| GET    | `/api/tasks/:id`  | Get a single task     |
| PUT    | `/api/tasks/:id`  | Update a task         |
| DELETE | `/api/tasks/:id`  | Delete a task         |

---

## 📂 Project Structure

```
task-manager/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── taskController.js     # Business logic
│   ├── models/
│   │   └── Task.js               # Mongoose schema
│   ├── routes/
│   │   └── taskRoutes.js         # API routes
│   ├── .env                      # Environment variables
│   ├── server.js                 # Express server setup
│   └── package.json              # Backend dependencies
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.jsx      # Add/Edit task form
    │   │   ├── TaskList.jsx      # Task list container
    │   │   └── TaskItem.jsx      # Individual task card
    │   ├── services/
    │   │   └── api.js            # API service layer
    │   ├── App.jsx               # Main application
    │   ├── App.css               # Application styles
    │   └── main.jsx              # React entry point
    ├── index.html                # HTML template
    ├── vite.config.js            # Vite configuration
    └── package.json              # Frontend dependencies
```

---

## 🎯 Features Walkthrough

### 1. Adding a Task
- Fill in the task title and description
- Select status (Pending/Completed)
- Click "Add Task" button
- Task appears instantly in the list

### 2. Editing a Task
- Click the "Edit" button on any task card
- Form pre-fills with existing data
- Make your changes
- Click "Update Task" to save

### 3. Deleting a Task
- Click the "Delete" button on any task card
- Confirm deletion in the popup dialog
- Task is permanently removed

### 4. Filtering Tasks
- Use filter buttons at the top
- **All** - Shows all tasks
- **Pending** - Shows only pending tasks
- **Completed** - Shows only completed tasks

---

## 🔧 Configuration

### Backend Configuration
Edit `backend/.env` to customize:
```env
PORT=5000                          # Server port
MONGODB_URI=mongodb://...          # Database connection
```

### Frontend Configuration
Edit `frontend/vite.config.js` for API proxy:
```javascript
server: {
  proxy: {
    '/api': 'http://localhost:5000'
  }
}
```

---

## 🐛 Troubleshooting

### Backend Won't Start
- ✅ Check if MongoDB is running
- ✅ Verify `.env` file exists with correct values
- ✅ Ensure port 5000 is not in use
- ✅ Run `npm install` to install dependencies

### Frontend Can't Connect to Backend
- ✅ Make sure backend server is running first
- ✅ Check backend is on port 5000
- ✅ Clear browser cache and reload
- ✅ Verify proxy settings in `vite.config.js`

### MongoDB Connection Error
- ✅ Start MongoDB service: `mongod` (for local)
- ✅ For Atlas: Check IP whitelist and credentials
- ✅ Verify connection string format

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Create a new task
- [ ] View all tasks
- [ ] Edit an existing task
- [ ] Delete a task
- [ ] Filter by Pending status
- [ ] Filter by Completed status
- [ ] Test form validation (empty fields)
- [ ] Test on mobile device

### API Testing with Postman
1. Import API endpoints
2. Test all CRUD operations
3. Verify response formats
4. Check error handling

---

## 🚀 Deployment (Optional)

### Backend - Render/Railway
1. Push code to GitHub
2. Create new web service
3. Connect repository
4. Add environment variables
5. Deploy

### Frontend - Vercel/Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- MongoDB documentation and tutorials
- React and Express.js communities
- Vite for the amazing build tool

---

<div align="center">

**Made with ❤️ using the MERN Stack**

⭐ Star this repo if you find it helpful!

</div>