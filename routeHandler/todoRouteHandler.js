//dependencies
const express = require("express");
const Todo = require("../models/todoModel");
const router = express.Router();

//GET A TODO
router.get("/", async (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There was an server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Data getting successfully",
      });
    }
  });

  // use async
  //   try {
  //     const newTodo = await Todo.find({});
  //     res.send(newTodo);
  //   } catch (error) {
  //     console.log(error);
  //   }
});

//GET A TODO BY ID
router.get("/:id", async (req, res) => {
  Todo.findOne({ _id: req.params.id }, (error, data) => {
    if (error) {
      res.status(500).json({
        error: "There was an server side error",
      });
    } else {
      res.status(200).json({
        result: data,
        message: "Data getting successfully",
      });
    }
  });
  //   try {
  //     const result = await Todo.findOne({ _id: req.params.id });
  //     res.send(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
});

//POST A TODO use callback
router.post("/", (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was an server side error",
      });
    } else {
      res.status(200).json({
        message: "Data inserted successfully",
      });
    }
  });
});

//POST A TODO use async
// router.post("/", async (req, res) => {
//   try {
//     const newTodo = new Todo(req.body);
//     const result = await newTodo.save();
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

//POST A MULTIPLE TODO
router.post("/all", async (req, res) => {
  Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was an server side error",
      });
    } else {
      res.status(200).json({
        message: "Data inserted successfully",
      });
    }
  });

  // use async
  // try {
  //   const newTodo = await Todo.insertMany(req.body);

  //   res.send(newTodo)
  // } catch (error) {
  //     console.log(error.message);
  // }
});

//UPDATE A TODO
router.put("/:id", (req, res) => {
  Todo.updateOne({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was an server side error",
      });
    } else {
      res.status(200).json({
        message: "Data updated successfully",
      });
    }
  });
  // try {
  //   const result = await Todo.updateOne(
  //     { _id: req.params.id },
  //     { $set: req.body }
  //   );
  //   res.send(result);
  // } catch (error) {
  //   console.log(error);
  // }
});

//DELETE A TODO
router.delete("/:id", (req, res) => {
  Todo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was an server side error",
      });
    } else {
      res.status(200).json({
        message: "Data deleted successfully",
      });
    }
  });
});


module.exports = router;
