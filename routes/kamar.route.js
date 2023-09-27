const express = require(`express`)
/** initiate object that instance of express */
const app = express()
app.use(express.json())
const kamarController =require(`../controllers/kamar.controller`)
app.get("/", kamarController.getAllkamar)
app.post("/add", kamarController.addkamar)
app.post("/find", kamarController.findkamar)
app.put("/:id", kamarController.updatekamar)
app.delete("/:id", kamarController.deletekamar)
module.exports = app