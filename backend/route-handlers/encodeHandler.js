const encoder = require("../encode");

module.exports = function encode(req, res) {
  const { value } = req.query;
  return res.json(encoder(value));
};
