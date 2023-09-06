// Dependencies
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Initializes the app and creates a port
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});