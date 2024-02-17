const {
  postTaskService,
  updateTaskService,
  getAllTasksService,
  getCrmTasksService,
  getEmbedTasksService,
  getBusinessAppTasksService,
} = require("../Services");

const postTask = async (req, res) => {
  try {
    const taskData = req.body;
    if (!taskData) throw new Error("task is invalid please check the feilds");
    await postTaskService(taskData);
    res.status(201).json({ message: "Task created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating task" });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) throw new Error("Task ID is missing.");
    await updateTaskService(id, req.body);
    res.status(200).json({ message: "Task updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating task" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks); // Send the tasks as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching tasks" }); // Send error response
  }
};

const getCrmTasks = async (req, res) => {
  try {
    const tasks = await getCrmTasksService();
    res.status(200).json(tasks); // Send the tasks as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching CRM tasks" }); // Send error response
  }
};

const getEmbedTasks = async (req, res) => {
  try {
    const tasks = await getEmbedTasksService();
    res.status(200).json(tasks); // Send the tasks as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching embedded tasks" }); // Send error response
  }
};

const getBusinessAppTasks = async (req, res) => {
  try {
    const tasks = await getBusinessAppTasksService();
    res.status(200).json(tasks); // Send the tasks as JSON response
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error fetching business application tasks" }); // Send error response
  }
};

module.exports = {
  postTask,
  updateTaskById,
  getAllTasks,
  getCrmTasks,
  getEmbedTasks,
  getBusinessAppTasks,
};
