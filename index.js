require("dotenv").config();
const express = require("express")
const connectToDb = require("./database/db")
const path = require("path");
const Music = require("./model/Musicas")


const app = express();
const port = process.env.PORT || 3000;
let music = null;

//O EJS permite utilizar JS dentro do HTML
app.set("view engine", "ejs");

//Arquivos estáticos ficam na pasta indicada
app.use(express.static(path.join(__dirname, "public")));

//Intersecção de dados de formulário html 
app.use(express.urlencoded());


connectToDb();

//Busca um array de informações no banco de dados e traz para a variavel
app.get('/', async (req, res) => {
    const playlist = await Music.find();
    res.render("index", { playlist });
});

app.get("/admin", async (req, res) => {
    const playlist = await Music.find();
    res.render("admin", { playlist, music: null, musicDel: null });
});

app.post("/create", async (req, res) => {
    const music = req.body;
    await Music.create(music);
    res.redirect("/");
});

//Busca o ID da musica e renderiza a musica 
app.get("/by/:id/:action", async (req, res) => {
    const { id, action } = req.params;
    music = await Music.findById({ _id: id });
    const playlist = await Music.find();
    if ( action == "edit") {
         res.render("admin", { playlist, music, musicDel: null });
    } else {
        res.render("admin", { playlist, music: null, musicDel: music });
    }
   
});

//Encontra na lista de objetos o id
app.post("/update/:id", async (req, res) => {
    const newMusic = req.body;
    await Music.updateOne({ _id: req.params.id}, newMusic);
    res.redirect("/admin");
});

app.get("/delete/:id", async (req, res) => {
    await Music.deleteOne({ _id: req.params.id}, newMusic);
    res.redirect("/admin");
}); 

app.listen(port, () => 
    console.log(`Servidor rodando em http://localhost:${port}`)
);
