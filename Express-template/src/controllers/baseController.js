// baseController.js
module.exports = {
  // نمونه متدهای کنترلر
  get: (req, res) => {
    res.send('GET request received')
  },
  post: (req, res) => {
    res.send('POST request received')
  },
}
