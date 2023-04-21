
const express = require("express");
const {
    createProperty,
    getAllProperties,
    getPropertyById,
    updatePropertyById,
    deletePropertyById
} = require("../controllers/PropertyController");

const router = express.Router();

//Todo protect routes

router.get('/', getAllProperties);
router.get('/:id', getPropertyById);

router.post('/', createProperty);

router.patch('/:id',updatePropertyById)
router.delete('/:id',deletePropertyById)
module.exports = router;




