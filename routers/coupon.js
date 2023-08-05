const express = require('express');
const couponController = require('../controller/coupon')

const router = express.Router();

// User routes
router.post('/', couponController.create);

router.get('/', couponController.get);
router.post('/getByName', couponController.getByName)
router.get('/:id', couponController.getById);
module.exports = router;