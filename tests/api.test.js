const request = require('supertest');
const app = require('../app');
const { pool, initDb } = require('../db');

beforeAll(async () => {
  await initDb();
});

afterAll(async () => {
  await pool.end();
});

beforeEach(async () => {
  await pool.query('DELETE FROM tasks');
});

describe('GET /health', () => {
  it('returns 200 and confirms database connectivity', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
    expect(res.body.database).toBe('connected');
  });
});

describe('POST /tasks', () => {
  it('creates a task with a valid title', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Write tests' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Write tests');
    expect(res.body.completed).toBe(false);
  });

  it('rejects an empty title with 400', async () => {
    const res = await request(app).post('/tasks').send({ title: '' });
    expect(res.statusCode).toBe(400);
  });

  it('rejects a missing title with 400', async () => {
    const res = await request(app).post('/tasks').send({});
    expect(res.statusCode).toBe(400);
  });
});

describe('GET /tasks', () => {
  it('returns an empty array when there are no tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('returns tasks that were created', async () => {
    await request(app).post('/tasks').send({ title: 'Task A' });
    await request(app).post('/tasks').send({ title: 'Task B' });
    const res = await request(app).get('/tasks');
    expect(res.body.length).toBe(2);
  });
});

describe('PATCH /tasks/:id/complete', () => {
  it('marks an existing task as completed', async () => {
    const created = await request(app).post('/tasks').send({ title: 'Finish me' });
    const res = await request(app).patch(`/tasks/${created.body.id}/complete`);
    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(true);
  });

  it('returns 404 for a non-existent task', async () => {
    const res = await request(app).patch('/tasks/999999/complete');
    expect(res.statusCode).toBe(404);
  });
});

describe('DELETE /tasks/:id', () => {
  it('deletes an existing task', async () => {
    const created = await request(app).post('/tasks').send({ title: 'Delete me' });
    const res = await request(app).delete(`/tasks/${created.body.id}`);
    expect(res.statusCode).toBe(204);
  });

  it('returns 404 when deleting a non-existent task', async () => {
    const res = await request(app).delete('/tasks/999999');
    expect(res.statusCode).toBe(404);
  });
});
