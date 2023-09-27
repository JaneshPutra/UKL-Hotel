const express = require(`express`)
/** initiate object that instance of express */
const app = express()
app.use(express.json())
const pesananController =require(`../controllers/pesanan.controller`)
app.get("/", pesananController.getAllpesanan)
app.post("/", pesananController.addpesanan)
app.post("/find", pesananController.findpesanan)
app.put("/:id", pesananController.updatepesanan)
app.delete("/:id", pesananController.deletepesanan)
module.exports = app