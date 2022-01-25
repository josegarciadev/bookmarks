const express = require('express');
const router = express.Router();

const controller = require('../controllers/bookmark');

router.get('/', controller.getBookmarks);
router.post('/', controller.addBookmark);

module.exports = router;
