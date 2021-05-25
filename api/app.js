const { readFileSync } = require('fs');
const app = require('express')();
const PORT = 8080;

const read = () => JSON.parse(readFileSync('./db.json'));

app.use(require('body-parser').json(), function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Returns a list of all rentals
app.get('/rentals', (_, res) => {
  const { rentals } = read();
  res.json({ rentals });
});

function validateRecommendationRequest(req, res, next) {
  if (!req.body || !req.body.ids) {
    return res.status(400).json({ error: 'Invalid request' });
  }
  return next();
}

app.listen(PORT, () => console.log(`Rental API listening on port`, PORT));
