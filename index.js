const express = require('express');
const app = express();
require('./models/dbConfig'); 
const bodyParser = require('body-parser')
const postsRoutesClients = require('./routes/postsControllerClients');
const postsRoutesProspects = require('./routes/postControllersProspects');
const cors = require('cors')
const port = process.env.PORT || 8080
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);
app.use(bodyParser.json());
app.use(cors());

app.use('/clients', postsRoutesClients);
app.use('/prospects', postsRoutesProspects);






app.listen(port, () => console.log('SERVER STARTED'))