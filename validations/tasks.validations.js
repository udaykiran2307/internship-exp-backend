const validateTask = (req, res, next) => {
    const { name, branch } = req.body;
    if (!name || !branch || !branch.includes('feature')) {
        return res.status(400).json({ message: "Invalid name or branch" });
    }
    next(); 
};

module.exports = validateTask;
