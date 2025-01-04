const Todo = require('../models/TodoModel');


module.exports.createTodo = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const todo = new Todo({ title, description, status });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getAllTodo = async (req, res) => {
  try{
  Todo.find().then((todo)=>{
    res.json({todo});
  });
} catch (err) {
  res.status(500).json({ error: err.message });
}
};

module.exports.getTodoById = async (req, res) => {
  try{
    const id = req.params.id;
    Todo.findById(id).then((todo)=>{
      if(todo){
        return res.json({ todo });
      }
      return res.status(404).json({message:`Todo not found with the id ${id}`})
    });

  }catch (err) {
     res.status(500).json({ error: err.message });
   };
};

module.exports.updateTodoStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!['pending', 'in-progress', 'completed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: 'Task not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// module.exports ={
//   //createTodo,
//   getAllTodo,
//   getTodoById,
//   updateTodoStatus,
//   deleteTodo
// };
