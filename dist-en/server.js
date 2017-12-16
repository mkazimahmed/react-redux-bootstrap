var express = require('express');
var app = express();
var nonSPArouter = express.Router();

app.use(express.static(`${__dirname}/`));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(9000, () => {
  console.log('Server is up and running on port 9000');
});
