const Router = require('express');
const router = new Router();
const blocksController = require('../controllers/blocksController');

router.get('/', blocksController.get);
// router.post('/');
// router.update('/');
// router.delete('/:id');

module.exports = router;
