import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var posts = [{name: "default name", body: "default body", id: 0}];
var postId = 1;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    //console.log(posts);
    res.render("index.ejs", {posts: posts});
  });

app.get("/create", (req, res) => {
    res.render("create.ejs");
  });

  app.post("/", (req, res) => {
    posts.push({name: req.body.name, body: req.body.body, id: postId});
    postId++;
    res.redirect("/");
  });

  app.post("/delete", (req, res) => {
    for (i = 0; i < posts.length; i++){
        if (posts[i].id === Number(req.body.id)){
            posts.splice(i, 1);
        }
    }
    res.redirect("/");
  });
  
  app.post("/edit", (req, res) => {
    res.redirect("/edit/" + req.body.id);
  });

  app.get("/edit/:id", (req, res) => {
    var postId = req.params.id;
    var post;
    for (i = 0; i < posts.length; i++){
        if (posts[i].id === Number(postId)){
            post = posts[i];
        }
    }
    res.render("edit.ejs", {post: post});
  });

  app.post("/edit/:id", (req, res) => {
    for (i = 0; i < posts.length; i++){
        if (posts[i].id === Number(req.body.id)){
            posts[i].name = req.body.name;
            posts[i].body = req.body.body;
        }
    }
    res.redirect("/");
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });