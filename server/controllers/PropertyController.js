const PropertyModel = require('../models/Property');
const paginate = require("../utils/paginate")

const createProperty = async (req, res, next) => {
  try {
   
    const { name, address, city, state, offices,images, bathrooms, rent, isAvailable,landlord } = req.body;

    const newProperty = new PropertyModel({
      name,
      address,
      city,
      state,
      offices,
      bathrooms,
      rent,
      isAvailable,
      landlord,
      images
    });

    // Save the  property instance to the database
    const savedProperty = await newProperty.save();

    // Return the saved  property as a response
    return res.status(201).json(savedProperty);
  } catch (err) {
    next(err);
  }
};




// Get all  properties
const getAllProperties = async (req, res) => {
  try {
   
   
    const properties = await PropertyModel.find({})
 
    res.status(200).json({data:properties,message:"fetched successfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single  property by ID
const getPropertyById = async (req, res) => {
  try {
    const Property = await PropertyModel.findById(req.params.id);
    if (Property) {
      res.json(Property);
    } else {
      res.status(404).json({ message: ' property not found' });
    }
  } catch (error) {
   
    res.status(500).json({ message: error.message });
  }
};

// Update a  property by ID
const updatePropertyById = async (req, res) => {
  try {
    const Property = await PropertyModel.findById(req.params.id);
    if (Property) {
      Property.name = req.body.name || Property.name;
      Property.address = req.body.address || Property.address;
      Property.city = req.body.city || Property.city;
      Property.state = req.body.state || Property.state;
      Property.zipCode = req.body.zipCode || Property.zipCode;
      const updatedProperty = await Property.save();
      res.json(updatedProperty);
    } else {
      res.status(404).json({ message: ' property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a  property by ID
const deletePropertyById = async (req, res) => {
  try {
    const Property = await PropertyModel.findById(req.params.id);
    if (Property) {
      await Property.remove();
      res.json({ message: ' property deleted' });
    } else {
      res.status(404).json({ message: ' property not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createProperty,
    getAllProperties,
    getPropertyById,
    updatePropertyById,
    deletePropertyById
};