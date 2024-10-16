# Employee Management CRUD Web App

This project is a full-stack employee management web application built with the **MERN** stack (MongoDB, Express, React, and Node.js). It allows the user to manage employee records by performing CRUD (Create, Read, Update, Delete) operations. The project is designed for **Apollonia Dental Practice**, which requires an initial system to manage employees and their respective departments.

## Features
- Add, update, and delete employees.
- Filter employees by department.
- View a list of all employees.
- RESTful API for backend services.
- Docker support for containerization.
- Automatic deployment to Docker Hub using GitHub Actions.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API**: RESTful API
- **CSS**: Custom CSS for simple UI
- **Docker**: Docker support for both frontend and backend
- **GitHub Actions**: CI/CD pipeline to push Docker images to Docker Hub

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mehtachandrashekhar/employee-management-CRUD-web-app.git
cd employee-management-CRUD-web-app
```

### 2. Backend Setup

Navigate to the `backend` folder and follow the steps:

```bash
cd backend
```

#### 2.1 Install Dependencies

```bash
npm install
```

#### 2.2 Set up Environment Variables

Create a `.env` file in the `backend` folder with the following content:

```
MONGO_URI=your_mongo_connection_string
PORT=5000
```

Replace `your_mongo_connection_string` with your MongoDB connection URI.

#### 2.3 Run the Backend Server

```bash
npm start
```

The backend server should now be running at `http://localhost:5000`.

### 3. Frontend Setup

Navigate to the `frontend` folder:

```bash
cd ../frontend
```

#### 3.1 Install Dependencies

```bash
npm install
```

#### 3.2 Start the Frontend Server

```bash
npm start
```

The frontend server should now be running at `http://localhost:3000`.

### 4. Connecting Frontend to Backend

To ensure the frontend can communicate with the backend, configure a proxy in the `frontend/package.json` file:

```json
"proxy": "http://localhost:5000",
```

### 5. Docker Setup (Optional)

If you wish to deploy this application using Docker, you can do so by creating a `Dockerfile` and configuring it for your environment.

#### 5.1 Build Docker Image Locally

```bash
docker build -t employee-management-app .
```

#### 5.2 Run Docker Container

```bash
docker run -p 5000:5000 employee-management-app
```

### 6. GitHub Actions CI/CD Pipeline

This project comes with a GitHub Actions workflow to automate deployment to Docker Hub.

#### 6.1 Setting up Secrets in GitHub

- Go to your repository's **Settings** > **Secrets** > **Actions**.
- Add the following secrets:
  - `DOCKER_USERNAME`: Your Docker Hub username.
  - `DOCKER_PASSWORD`: Your Docker Hub password or personal access token.

#### 6.2 Docker Workflow

A GitHub Actions workflow (`.github/workflows/docker-publish.yml`) is already set up to:
- Build the Docker image when changes are pushed to the `main` branch.
- Push the image to Docker Hub.

### 7. Project Structure

```bash
mern-employee-management/
├── backend/
│   ├── config/                # MongoDB connection
│   ├── controllers/           # CRUD logic for employees
│   ├── models/                # Mongoose schema for employees
│   ├── routes/                # API routes
│   ├── middleware/            # Error handling middleware
│   └── server.js              # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/        # React components (Form, List, Filter)
│   │   ├── services/          # API calls via Axios
│   │   └── App.js             # Main React app file
│   └── public/
│       └── index.html         # Entry point for React
├── .github/workflows/         # GitHub Actions workflow for Docker
└── package.json               # Project dependencies
```

### 8. Available API Endpoints

| Method | Endpoint           | Description                 |
|--------|--------------------|-----------------------------|
| GET    | /api/employees     | Get all employees           |
| POST   | /api/employees     | Add a new employee          |
| PUT    | /api/employees/:id | Update an employee          |
| DELETE | /api/employees/:id | Delete an employee          |

### 9. Future Enhancements

- Employee specialization and training records.
- Patient management and assignment.
- Revenue tracking per employee.
- General customer relationship management (CRM) features.
