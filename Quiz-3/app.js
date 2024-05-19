const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();
const PORT = 2500;

// Built-in middleware for parsing JSON 
app.use(express.json());
// Use the book routes
app.use(bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
