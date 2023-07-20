const bodyParser = require('body-parser');
let cors = require('cors');
const path = require('path')

let express = require('express');
let app = express();
let port = process.env.PORT || 1060;
let mongoose = require('mongoose');
let studentRouter = require('./router/student');
let registerationRouter = require('./router/registration');
let axios = require('axios');
app.use(cors());
app.use(bodyParser.json({ limit: '300kb' }));
mongoose.set('strictQuery', false);
//MONGODB DATA BASE VIKAS (2K20-BATCH)
mongoose.connect("mongodb+srv://vikas:infovikas@cluster0.fmun4dn.mongodb.net/junoon?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
})

app.use('/', studentRouter);
app.use('/', registerationRouter);

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'build/index.html'))
);

// server is started.
app.listen(port, () => {
    console.log(`app start listening on port ${port}`);
})




