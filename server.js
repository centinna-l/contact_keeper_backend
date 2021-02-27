require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 3230;
const apiRoutes = require('./api-routes');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then((msg) => {
    console.log("DB Connected");
}).catch(err => {
    console.log(err);
})

// app.get("/", (req, res) => {
//     res.status(200).json({
//         "message": "The API request is working well"
//     })
// })
app.use('/api', apiRoutes);
app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})