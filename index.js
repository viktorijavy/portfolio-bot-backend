//TODO in FE on last stepp, create one payload object and POST it to the backend
//TODO need a post route with express server
//TODO this route parses all the possible fields and renders them in html (best same compenent as in the frontend)

const express = require('express')
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json())
app.use(cors())

app.post('/generate', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})