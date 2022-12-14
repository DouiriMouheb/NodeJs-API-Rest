const express = require("express");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello, Express 3✌"));
app.get("/api/pokemons", (req, res) =>
  res.send(`il y a ${pokemons.length} Pokemons dans le pokédex, pour le moment`)
);

app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  res.send(`vous avez demande le pokemon ${pokemon.name}`);
});

app.listen(port, () =>
  console.log(
    `Notre application node est demarreé sur : http://localhost:${port}`
  )
);
