const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());




const uri = "mongodb+srv://Admin:Admin@2002@cluster0.mongodb.net/contactDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB ContactDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Create a schema and model for the Contact form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model("Contact", contactSchema);

// API endpoint to save contact form data
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).send("All fields are required.");
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).send("Contact saved successfully");
  } catch (error) {
    res.status(500).send("Error saving contact details: " + error.message);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
