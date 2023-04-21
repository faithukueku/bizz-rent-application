
const express = require("express");
const {
    createNewProperty
} = require("../controllers/PropertyController");

const router = express.Router();

router.post('/', createNewProperty);

module.exports = router;




