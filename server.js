const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send("welcome to home page");
})

app.listen(8080, () => {
    console.log("Hello!");
});