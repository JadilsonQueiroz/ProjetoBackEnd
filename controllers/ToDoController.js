const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text,responsavel,telefone,email } = req.body;

  ToDoModel.create({ text,responsavel,telefone,email }).then((data) => {
    console.log("Data has been saved to the database...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text,responsavel,telefone,email } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text,responsavel,telefone,email })
    .then(() => {
      res.send("Data has been updated...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Data has been deleted...");
    })
    .catch((err) => {
      console.log(err);
    });
};
