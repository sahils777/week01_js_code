const express = require('express');
const app = express();
const SERVER_PORT = 3001


app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1>');
});

app.get('/hello', (req, res) => {
    res.status(200)
    res.send('<h1>GET - Hello World</h1>');
});

app.post('/hello', (req,res)=>{
    res.status(201)
       .send('<h1>POST - Hello World</h1>');
});

// app.all('/hello', (req,res)=>{
//     res.status(200)
//     res.send('<h1>All - Hello World</h1>');
// });

app.put('/hello', (req,res)=>{
    res.status(203)
    res.send('<h1>PUT - Hello World</h1>');
});

app.delete('/hello', (req,res)=>{
    res.status(204)
    res.send('<h1>DELETE - Hello World</h1>');
});

app.get('/student', (req, res) => {
    res.status(200)
    const stud = {
        name: "Mohmadsahil Shaikh",
        age: 21,
    }
    res.json(stud);
});

//Query String Parameters
app.get('/employee',(req, res) => {
    console.log(req.query);
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}`);
});

//Path Parameters
app.get('/employee/:fnm/:lnm/:city',(req, res) => {
    console.log(req.params);
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);
});


app.post('/user', (req, res) => {
    res.status(200)
    const user = {
        firstname: "John",
        lastname: "Doe",
    }
    res.json(user);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
});