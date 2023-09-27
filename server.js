const express = require("express")
const app = express()
var bodyParser = require('body-parser')
const PORT = 7000
const cors = require(`cors`)
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const userRoute = require(`./routes/user.route`)
const tipe_kamarRoute = require(`./routes/tipe_kamar.route`)
const pesananRoute = require(`./routes/pesanan.route`)
const kamarRoute = require(`./routes/kamar.route`)
const detailpemesananRoute = require(`./routes/detail_pemesanan.route`)
// const adminRoute = require(`./routes/admin_route`)
// const bookRoute = require(`./routes/book_route`)
app.use("/user", userRoute)
app.use("/tipe_kamar", tipe_kamarRoute)
app.use("/pesanan", pesananRoute)
app.use("/kamar", kamarRoute)
app.use("/detail_pemesanan", detailpemesananRoute)
app.use(express.static(__dirname))
app.listen(PORT, () => {
    console.log(`ALHAMDULILLAH RUN ON PORT
    ${PORT}`)
    })