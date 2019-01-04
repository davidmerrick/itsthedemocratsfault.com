const express = require('express')
const app = express()
const port = 3000
const APP_NAME = "itsallthedemocratsfault"

app.use(express.static('public'))

app.listen(port, () => console.log(`${APP_NAME} app listening on port ${port}!`))