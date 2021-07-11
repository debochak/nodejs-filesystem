const express = require("express");
// const { userInfo } = require("os");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


const fs = require("fs")
const path = "/Users/debo/Documents/Guvi/Node/Task/FileSystem/"

var timestamp = new Date().toTimeString();
var date = new Date().toString();

var filename = path+date+'.txt';
console.log(filename);

// fs.readdir(path, (err, files)=>{
//     if(err) throw err;
//     console.log(files);
// })

app.post('/files', (req,res)=>{
    fs.writeFile(filename,timestamp,(err)=>{
        if(err) throw err;
        res.status(200).send(`new file created with name "${date}" and content "${timestamp}"`)
    })
});

app.get('/files', (req,res)=>{
    fs.readdir(path,(err,files)=>{
        if(err) throw err;
            res.status(200).json(files) //ask the query of how to use this multiple times
        // }
    })
});

app.get('/', (req,res)=>{
    res.send("This is my home page for my filesystem API. Use /files for get and push operations")
});

app.listen((port),()=>{
    console.log("listening in port ", port)
})

