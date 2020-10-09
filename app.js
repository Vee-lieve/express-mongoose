const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

//const url = 'mongodb+srv://badgebookdb:badgebookdb2019@cluster0-pn3a6.mongodb.net/test?retryWrites=true&w=majority'
var url = 'mongodb://127.0.0.1/asmsi'
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose
    .connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(err);
        console.log('CONNECTION ERROR!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

const userRoute = require("./routes/users.router")
app.use(userRoute)

app.get("/", (req, res)=>{
    res.json({
        sms: "Hello from express."
    })
})
var port = process.env.PORT || 8084
const server = app.listen(port, function() {
    console.log('app listening on post:', port);
});
const io = require("socket.io")(server);
app.set('socketio', io);