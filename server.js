import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/demo_preview', (req, res) => {
  res.sendFile(join(__dirname, 'demo_preview.html'));
});

app.get('*', (req, res) => {
  if (req.path.includes('.') && !req.path.endsWith('.html')) {
    return res.status(404).send('Not found');
  }
  res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`ZSJ landing on :${PORT}`));
