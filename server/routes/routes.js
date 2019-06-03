const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', (req, res) => {
    res.send("INDEX")
});

router.get('/upc/:upc', controller.getItemList);

router.get('/id/:id', controller.getItemDetails);

module.exports = router;
