const express = require(`express`)
/** initiate object that instance of express */
const app = express()
app.use(express.json())
const tipe_kamarController =require(`../controllers/tipe_kamar.controller`)
app.get("/", tipe_kamarController.getAllType)
app.post("/add", tipe_kamarController.addType)
app.post("/find", tipe_kamarController.findType)
app.put("/updete/:id", tipe_kamarController.updateType)
app.delete("/delete/:id", tipe_kamarController.deleteType )
module.exports = app