const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseContrller');

router.get('/:slug', courseController.show);

module.exports = router;
