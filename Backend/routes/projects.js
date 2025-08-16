const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you will create this

// @route   GET /api/projects
// @desc    Get all projects
router.get('/', projectController.getProjects);

// @route   POST /api/projects
// @desc    Create a project
router.post('/', authMiddleware, projectController.createProject);

// @route   PUT /api/projects/:id
// @desc    Update a project
router.put('/:id', authMiddleware, projectController.updateProject);

// @route   DELETE /api/projects/:id
// @desc    Delete a project
router.delete('/:id', authMiddleware, projectController.deleteProject);

module.exports = router;
