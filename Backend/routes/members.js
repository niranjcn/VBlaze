const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you will create this

// @route   GET /api/members
// @desc    Get all members
router.get('/', memberController.getMembers);

// @route   POST /api/members
// @desc    Create a member
router.post('/', authMiddleware, memberController.createMember);

// @route   PUT /api/members/:id
// @desc    Update a member
router.put('/:id', authMiddleware, memberController.updateMember);

// @route   DELETE /api/members/:id
// @desc    Delete a member
router.delete('/:id', authMiddleware, memberController.deleteMember);

module.exports = router;
