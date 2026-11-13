require("dotenv").config();
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("OK")
})

app.get()

app.post("/api/v1/genres", async (req, res) => {
  const body = req.body;
  let genre = await prisma.genre.create({
    data: {
      name: body.name
    }
  })
  res.status(201).json(genre);
})


app.patch("/api/v1/genres/:id", async (req, res) => {
  const body = req.body;
  let UpdatedGenre})

app.listen(3003, () => {
  console.log("Server started on port 3003")
})






//get by id