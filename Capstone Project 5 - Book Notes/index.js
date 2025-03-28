import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { compile } from "ejs";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "booknotes",
  password: "admin",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function getBooks(){
    const queryResult = await db.query("SELECT * FROM books");
    console.log(queryResult.rows);
    return queryResult.rows;
}

app.get("/", async (req, res) =>{
    const books = await getBooks();
    res.render("index.ejs", {books})
});

app.get("/add", async (req, res) =>{
    res.render("create.ejs")
});

app.get("/edit/:id", async (req, res) =>{
    const books = await getBooks();
    const bookId = req.params.id;
    var book = {};

    for (var i = 0; i < books.length; i++){
        if(books[i].id == bookId){
            book = books[i];
        }
    }
    console.log(book);

    res.render("edit.ejs", {book})
});

app.post("/edit/:id", async (req, res) =>{
    const bookId = req.params.id;
    db.query("UPDATE books SET name=$1, notes=$2, oclc=$3, date=$4, score=$5 WHERE id=$6", [req.body.name, req.body.notes, parseInt(req.body.oclc), req.body.date, parseInt(req.body.rating), bookId]);
    res.redirect("/");
});

app.post("/add", async (req, res) =>{
    console.log(req.body);
    db.query("INSERT INTO books(name, notes, oclc, date, score) VALUES ($1, $2, $3, $4, $5)", [req.body.name, req.body.notes, parseInt(req.body.oclc), req.body.date, parseInt(req.body.rating)]);
    res.redirect("/");
});

app.get("/delete/:id", async(req, res) =>{
    const books = await getBooks();
    const bookId = req.params.id;
    var book = {};
    for (var i = 0; i < books.length; i++){
        if(books[i].id == bookId){
            book = books[i];
        }
    }

    db.query("DELETE FROM books WHERE id=$1", [book.id]);
    res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
