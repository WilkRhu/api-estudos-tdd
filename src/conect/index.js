const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Conectado ao Banco de Dados!');
});

mongoose.connection.on('desconnect', () => {
  console.log('Desconectado do banco de dados!');
});

mongoose.connection.on('error', (error) => {
  console.log('Erro ao conectar com o banco de dados!');
  throw (error);
});


module.exports = mongoose;
