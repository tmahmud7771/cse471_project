// Import required modules
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");

const customerRoutes = require("./routes/customerRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Create express app
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a blank route
app.get("/", (req, res) => {
  res.send("THIS IS THE API");
});

app.use("/api/customer/", customerRoutes);
app.use("/api/admin/", adminRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
