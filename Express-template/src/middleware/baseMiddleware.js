// baseMiddleware.js
module.exports = (req, res, next) => {
  console.log('Middleware executed')
  next()
}
