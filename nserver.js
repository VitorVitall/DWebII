const express = require("express");
const { getAllUsers, createUser } = require("./models/userModel_oracle");

const app = express();
app.use(express.json());

// Rota para buscar usuários
app.get("/users", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    await createUser(name, email);
    res.json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


app.get("/", (req, res) => {
    res.send("O servidor está funcionando corretamente");
});