import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs",  {noun : "", verb : ""});
});

app.post("/output" , async (req, res)=>{
    try{
        const word = req.body.inputWord;
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const definition1 = response.data[0].meanings[0].definitions[0].definition;
        const definition2 = response.data[0].meanings[1].definitions[0].definition;

        res.render("index.ejs", {def1 : {partofspeech : response.data[0].meanings[0].partOfSpeech, definition : definition1},
        def2 : {partofspeech : response.data[0].meanings[1].partOfSpeech, definition : definition2}});
    }catch(error){
        res.render("index.ejs");
    }
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});