const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const csvRouter = require('./routes/csv.router');
app.use('/csv', csvRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
