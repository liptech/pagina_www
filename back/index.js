require('dotenv').config();
const express = require('express');
const cors = require('cors');
const emailRouter = require('./emailRouter');

const app = express();
const PORT = process.env.PORT || 3001; // Use 3001, igual ao seu .env

// Configuração de CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://10.200.200.10:3001','http://10.200.200.10:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

// Rotas
app.use('/api', emailRouter);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
