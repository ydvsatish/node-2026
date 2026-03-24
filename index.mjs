import express from'express'
const server = express()
const port = 5000

server.get("/", (req, res) => {
  res.json({ name: "apple"})
})

server.get("/gello", (req, res) => {
  res.json({ name: "banana"})
})

server.listen(port, () => {
  console.log('server started on ${port}')
})
