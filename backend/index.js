const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bookingRoutes = require("./routes/bookingRoutes");
const Center1 = require("./routes/center1routes");
const Center2 = require("./routes/center2routes");
const Center3 = require("./routes/center3routes");
const Center5 = require("./routes/center4routs");
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/APPOINTMENT", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));
  
  
  app.use("/api", bookingRoutes);
  app.use("/api", Center2);
  app.use("/api", Center1);
  app.use("/api", Center3);
  app.use("/api", Center5);
  
  const port = 5000; // Make sure this matches the port your server is listening on
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  