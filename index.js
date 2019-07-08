const express = require('express');
const handlify = require('./handlers');
const services = require('./services');
const parser = require('body-parser');
const app = express();
const port = 3000;

app.use(parser.urlencoded({extended: false }));
app.use(parser.json());

const userHandler = handlify('users');


app.get('/', userHandler(services).get);
app.post('/', userHandler(services).post);
app.put('/:id', userHandler(services).put);
app.delete('/:id', userHandler(services).delete);

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
})
