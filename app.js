const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.use(function (req, res, next) {
  res
    .status(404)
    .render('404_error_template', { title: 'Sorry, page not found' });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}!`);
});
