const express = require('express');
const Contact = require('../models/Contact'); // Import the Contact model

const router = express.Router();

// Route to handle the contact form submission
router.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new Contact document
    const newContact = new Contact({ name, email, message });

    // Save the new contact to the database
    await newContact.save();

    // Respond with success
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;
