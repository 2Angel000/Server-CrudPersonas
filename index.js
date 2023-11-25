const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const cors = require('cors');
const bodyParser = require('body-parser'); // Importa body-parser

const URL = "mongodb+srv://angel:1234@cluster0.sjaioeh.mongodb.net/crud";

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const startServer = async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json()); // Agrega el middleware body-parser

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // Manejo de solicitud POST en una ruta específica, por ejemplo '/datos'
  app.post('/datos', (req, res) => {
    const datosRecibidos = req.body;
    // Aquí puedes realizar operaciones con los datos recibidos desde tu formulario
    console.log('Datos recibidos:', datosRecibidos);
    res.status(200).json({ message: 'Datos recibidos correctamente' });
  });

  app.listen(4000, () => console.log("Server UP & Running on port 4000"));
  console.log("http://localhost:4000/graphql");
};

startServer();
