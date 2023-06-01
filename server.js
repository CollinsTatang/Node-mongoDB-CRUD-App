const express = require('express')
const mongoose = require('mongoose');
const app = express();

//Middleware
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('let see the output on the browser');
})

app.get('/blog', (req, res) => {
    res.send('Keep Waching');
})

app.listen(3000, ()=> {
    console.log('Listening to port 3000...')
})

mongoose.connect('mongodb+srv://makungongcollins:G8YF7aqpr6rlslIq@clusternode.u29i3cy.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log(error)
})