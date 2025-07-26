const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for addition
app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.send('Invalid numbers provided.');
  } else {
    const sum = num1 + num2;
    res.send(`<h3>Result: ${num1} + ${num2} = ${sum}</h3><a href="/">Back</a>`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
