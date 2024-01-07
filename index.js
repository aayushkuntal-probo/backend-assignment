const express = require('express')
const app = express();
const routes = require('./app/routes'); 
const dotenv = require('dotenv');

dotenv.config();
app.use(express.static("public"));

app.use(express.json());
app.use('/api/contracts',routes);

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server started on port ${process.env.PORT || 3000}`);
})

module.exports = app;