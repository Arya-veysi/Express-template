// server.js
const app = require('./app')
const appConfig = require('./config/appConfig')

app.listen(appConfig.port, () => {
  console.log(`Server is running on port ${appConfig.port}`)
})
