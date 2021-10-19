const express = require('express');
const router = express.Router();
const policyController = require('../controller/policyController')



router.post('/',policyController.getdata)
router.post('/user/policy',policyController.getallpolicy)

module.exports = router;