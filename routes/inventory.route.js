const express = require('express');
const router = express.Router();

const inventory_controller = require('../controllers/inventory.controller');
router.get('/', inventory_controller.home);

router.post('/create', inventory_controller.inventory_create);
router.get('/all', inventory_controller.inventory_all);
router.get('/:id', inventory_controller.inventory_details);
router.post('/:id/update', inventory_controller.inventory_update);
router.delete('/:id/delete', inventory_controller.inventory_delete);

module.exports = router;

