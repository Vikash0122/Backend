const express = require("express");
const connect = require("./config/database");
const Demo = require("./models/demo");
const app = express();
const PORT = 3000;


app.listen(PORT, async ()=>{
    console.log(`Server started on PORT: ${PORT}`);
    await connect();
    console.log(`MongoDB Connected`);
    // const demo = await Demo.create({
    //     message: 'Message with Timestamps.',
    //     userEmail: 'vikashk@gmail.com'
    // });

    // const demos = await Demo.find();
    // console.log(demos);

    const demo = await Demo.findById('65bf8564d90a47a85dab2b01');
    demo.message = 'Second message';
    await demo.save();
    console.log(demo);
});
