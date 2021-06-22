const express = require('express');
const app = express();

app.use(express.json());
// using update file
app.use('/', require('./routes/updatedata.js'));
// using getfile
app.use('/', require('./routes/getdata.js'));
// using delete file
app.use('/', require('./routes/deletedata.js'));
// using signup file
app.use('/', require('./routes/signup'));
// using login file
app.use('/',require('./routes/login.js'));


app.listen(process.env.PORT, () => {
    console.log(`server is running on this ${process.env.PORT} port`);
});