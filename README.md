# To-Do List API — Dockerized & CI/CD Ready

A small REST API for managing tasks, built as a hands-on DevOps project covering
containerization, automated deployment, and cloud infrastructure.

## Tech stack
- Node.js + Express
- Docker
- GitHub Actions (CI/CD)
- AWS EC2

## Endpoints
| Method | Endpoint              | Description               |
|--------|------------------------|----------------------------|
| GET    | /health                | Health check               |
| GET    | /tasks                 | List all tasks             |
| POST   | /tasks                 | Create a task              |
| PATCH  | /tasks/:id/complete    | Mark task completed        |
| DELETE | /tasks/:id             | Delete a task               |

## Run locally
npm install
npm start

## Run with Docker
docker build -t todo-api .
docker run -p 3000:3000 todo-api
