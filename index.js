const express = require("express")
const app = express()
const path = require("path")

const cors = require("cors")
const PORT = process.env.PORT || 5000

// Init Middleware
app.use(express.json())
app.use(cors())

//Define Routes
app.use("/git", require("./routes/api/Profile"))
app.use("/telesign", require("./routes/api/tele"))

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  })
}

app.listen(PORT, () => console.log(`the server is running at ${PORT}`))
