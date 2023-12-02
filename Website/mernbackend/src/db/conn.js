const mongoose = require("mongoose");
const DB = `mongodb+srv://aditijha913:OyPYu2DlZbhauj8K@userata.q6mxlh1.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", true)
mongoose.connect(DB, {
}).then(() => {
    console.log(`connection successful`)
}).catch((err) => {
    console.log(err)
});