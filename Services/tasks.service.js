const Task = require("../models/index");

// Service function to create a new task
const postTaskService = async (taskData) => {
    try {
        const task = new Task(taskData);
        await task.save();
        return task;
    } catch (err) {
        throw new Error("Error creating task");
    }
};

// Service function to update a task by ID
const updateTaskService = async (id, newData) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, newData, { new: true });
        if (!updatedTask) {
            throw new Error("Task not found");
        }
        return updatedTask;
    } catch (err) {
        throw new Error("Error updating task");
    }
};

// Service function to get all tasks
const getAllTasksService = async () => {
    try {
        const tasks = await Task.find();
        return tasks;
    } catch (err) {
        throw new Error("Error fetching tasks");
    }
};

// Service function to get CRM tasks
const getCrmTasksService = async () => {
    try {
        const crmTasks = await Task.find({ project: "CRM" });
        return crmTasks;
    } catch (err) {
        throw new Error("Error fetching CRM tasks");
    }
};

// Service function to get embedded tasks
const getEmbedTasksService = async () => {
    try {
        const embedTasks = await Task.find({ project: "Embed" });
        return embedTasks;
    } catch (err) {
        throw new Error("Error fetching embedded tasks");
    }
};

// Service function to get business application tasks
const getBusinessAppTasksService = async () => {
    try {
        const businessAppTasks = await Task.find({ project: "BusinessApp" });
        return businessAppTasks;
    } catch (err) {
        throw new Error("Error fetching business application tasks");
    }
};

module.exports = {
    postTaskService,
    updateTaskService,
    getAllTasksService,
    getCrmTasksService,
    getEmbedTasksService,
    getBusinessAppTasksService
};


