const express = require('express'); 
const app=express();
const cors=require('cors')
const port = 8000;
require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./server/routes/pirate.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) )