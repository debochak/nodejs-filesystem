const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 3000;
app.use(express.json());


const fs = require("fs")
const path = "https://github.com/debochak/temp.git"

var timestamp = new Date().toTimeString();
var date = new Date().toString();

var filename = path+date;
console.log(filename);

fs.readdir(path, (err, files)=>{
    if(err) throw err;
    console.log(files);
})

app.post('/files', (req,res)=>{
    fs.writeFile(date,timestamp,(err)=>{
        if(err) throw err;
        res.status(200).send(`new file created with name "${date}" and content "${timestamp}"`)
    })
});

app.get('/files', (req,res)=>{
    fs.readdir(path,(err,files)=>{
        if(err) throw err;
            res.status(200).json(files)
        // }
    })
});

app.get('/', (req,res)=>{
    res.send("This is my home page for my filesystem API")
});

app.listen((port),()=>{
    console.log("listening in port ", port)
})

