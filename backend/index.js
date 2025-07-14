// backend/index.js

const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Baik untuk ditambahkan jika nanti ada POST/PUT request

// Endpoint API yang akan mengambil data dari Database
// Perhatikan: '/api' sudah dihapus dari semua rute di bawah ini
app.get('/education', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching education:', error); // Tambahkan log untuk debug
    res.status(500).json({ message: 'Gagal mengambil data pendidikan', error: error.message });
  }
});

app.get('/skills', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching skills:', error); // Tambahkan log untuk debug
    res.status(500).json({ message: 'Gagal mengambil data keahlian', error: error.message });
  }
});

app.get('/projects', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error); // Tambahkan log untuk debug
    res.status(500).json({ message: 'Gagal mengambil data proyek', error: error.message });
  }
});

// Wajib ada agar Vercel bisa menjalankan backend sebagai Serverless Function
module.exports = app;