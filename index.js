const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory "database" — resets when the server restarts.
// Good enough for a demo project; swap for a real DB later if you extend this.
let tasks = [];
let nextId = 1;

// Health check — useful for load balancers, uptime monitors, and Docker healthchecks
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// GET /tasks — list all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks — add a task
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'title is required and must be a non-empty string' });
  }
  const task = { id: nextId++, title: title.trim(), completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// PATCH /tasks/:id/complete — mark a task as completed
app.patch('/tasks/:id/complete', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'task not found' });
  }
  task.completed = true;
  res.json(task);
});

// DELETE /tasks/:id — delete a task
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'task not found' });
  }
  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`To-Do API listening on port ${PORT}`);
});
