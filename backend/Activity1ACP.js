const express = require("express");
const app = express();

// Define a dynamic route
app.get("/greet/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
});

// Server listens on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
