const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let blogsList = [];

app.get("/blogs", (req, res) => {
  return res.status(404).json({
    data: blogsList,
    success: true,
  });
});

app.post("/blogs", (req, res) => {
  // console.log(req.body);
  blogsList.push({ 
    title: req.body.title, 
    content: req.body.content,
    id: Math.floor(Math.random()*1000)
    });
    return res.status(201).json({
        success: true,
  });
});

app.get("/blogs/:id", (req, res) =>{
    const result = blogsList.filter((blog)=> blog.id == req.params.id);
    return res.status(200).json({
        data: result,
        success: true
    })
});

app.delete("/blogs/:id", (req,res)=>{
    // Extract the blog ID from the request parameters
    const blogId = req.params.id;

    // Find the index of the blog with the matching ID in the array
    const blogIndex = blogsList.findIndex((blog) => blog.id == blogId);

    // Check if the blog with the specified ID exists
    if (blogIndex !== -1) {
        // Remove the blog from the array using splice
        blogsList.splice(blogIndex, 1);

        // Return a JSON response indicating successful deletion
        return res.status(200).json({
            success: true,
            message: 'Blog deleted successfully'
        });
    } else {
        // Return a JSON response indicating that the blog was not found
        return res.status(404).json({
            success: false,
            message: 'Blog not found'
        });
    }
})

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
