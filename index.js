const app = require('./app');
const { initDb } = require('./db');

const PORT = process.env.PORT || 3000;

async function start() {
  const maxRetries = 10;
  for (let i = 1; i <= maxRetries; i++) {
    try {
      await initDb();
      console.log('Database ready.');
      break;
    } catch (err) {
      console.log(`DB not ready yet (attempt ${i}/${maxRetries}), retrying in 2s...`);
      await new Promise(r => setTimeout(r, 2000));
      if (i === maxRetries) throw err;
    }
  }

  app.listen(PORT, () => {
    console.log(`To-Do API listening on port ${PORT}`);
  });
}

start();
