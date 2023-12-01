import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"toor",
    database:"book_db"
})

// to send from html body
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.get("/book",(req,res)=>{
    const q="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/book",(req,res)=>{
    const q ="INSERT INTO books (`title`,`descrip`,`price`,`cover`) VALUES (?)";
    // const values=["title from backend","descrip from backend","cover pic from backend"];
    const values=[
        req.body.title,
        req.body.descrip,
        req.body.price,
        req.body.cover
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been added.")
    })

})

app.delete("/book/:id", (req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM books WHERE id=?"

    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted.")
    })
})

app.put("/book/:id", (req,res)=>{
    const bookId=req.params.id;
    const q="UPDATE books SET `title`=?,`descrip`=?,`price`=?,`cover`=? WHERE id=?"
    const values=[
        req.body.title,
        req.body.descrip,
        req.body.price,
        req.body.cover
    ]
    db.query(q,[...values, bookId],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been updated.")
    })
})

app.listen(8800,()=>{
    console.log("Backend running on port 8800")
})