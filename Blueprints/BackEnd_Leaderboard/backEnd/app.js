const express = require("express")
const app = express()
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleWare/error")
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")
const merchant = require('./routes/merchatRoute')
const type = require('./routes/typeRoute')
const branch = require('./routes/branchRoute')
const subproduct = require('./routes/subProductRoute')
const cart = require('./routes/cartRoute')
app.use(express.json())
app.use(cookieParser());
// app.use()
app.use("/api/v1", product)
app.use("/api/v1", user)
app.use("/api/v1", order)
app.use("/api/v1", merchant)
app.use("/api/v1", type)
app.use('/api/v1', branch)
app.use('/api/v1', subproduct)
app.use('/api/v1', cart)
app.use(errorMiddleware)






module.exports = app; 