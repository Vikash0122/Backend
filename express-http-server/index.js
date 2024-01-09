const express = require("express");
// create an express app object by calling the express function
const app = express();
const PORT = 3000;

app.get("/", function(request, response){
    response.send("Hello World!!!");
});
app.get("/home", function(request, response){
    response.send("Welcome to Home.");
});

app.post('/home', function (request, response) {
    response.send("Welcome to home Through POST...");
});

app.patch('/home', function (request, response) {
    response.json({
        message: "This is a patch request",
        success: true
    })
})



app.listen(PORT, function process(){
    console.log("Server started");
})
