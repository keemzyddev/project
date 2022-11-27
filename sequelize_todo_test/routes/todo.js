const express = require ("express");
const Todos = require ("../Todo.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todo = await Todos.findAll();
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const todo = await Todos.create(req.body);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:userId", async (req, res) => {
  const { userId: id } = req.params;
  try {
    const todo = await Todos.findOne({
      where: {
        userId: `${id}`,
      },
      returning: true,
      plain: true,
    });
    await todo.update({ reminder: `${req.body.reminder}` });
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:userId", async (req, res) => {
  const { userId: id } = req.params;
  try {
    await Todos.destroy({ where: { userId: `${id}` } });
    res.json("Todo deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
