const express = require('express')
const app = express()

const policyRoute = require('../api/router/policyRoute')


app.use(express.json())

app.get("/", (req, res) => {
  res.send("working")
});

app.use('/api/v1', policyRoute)



module.exports = app;