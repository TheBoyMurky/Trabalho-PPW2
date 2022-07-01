const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/users');
const funkoModel = require('./models/funkos');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://rootuser:rootpass@localhost:27017/ppw?authSource=admin');

// Setor Usuários

app.post("/validarUser", async (req, res) => {
    const user = req.body.user
    const senha = req.body.senha
    const userDb = await userModel.findOne({ username: user })
    if (!userDb){
        res.status(404).json({ message: "Usuario nao encontrado "})
    }
    if (userDb.senha != senha){
        res.status(400).json({ message: "Senha incorreta" })  
    }
    res.status(200).send()
})


app.get("/getUsers", (req, res) => {
    userModel.find({},(err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user)
});

app.put("/updateUserPassword", async (req, res) => {
    const userToUpdate = req.body;
    await userModel.findOneAndUpdate({username:userToUpdate.username}, {senha:userToUpdate.senha})
    
    res.json(userToUpdate)
});

app.post("/deleteUser", async (req, res) => {
    const userToDelete = req.body;
    await userModel.deleteOne({username:userToDelete.username})

    res.status(200).json({ message: "Usuario deletado" })
})


// Setor Funko
app.get("/getFunkos", (req, res) => {
    funkoModel.find({},(err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});

app.post("/createFunko", async (req, res) => {
    const funko = req.body;
    const newFunko = new funkoModel(funko);
    await newFunko.save();

    res.json(funko)
});

app.put("/updateFunkoValor", async (req, res) => {
    const funkoToUpdate = req.body;
    await funkoModel.findOneAndUpdate({name:funkoToUpdate.name}, {valor:funkoToUpdate.valor})
    
    res.json(funkoToUpdate)
});

app.put("/updateFunkoSale", async (req, res) => {
    const funkoToUpdate = req.body;
    await funkoModel.findOneAndUpdate({name:funkoToUpdate.name}, {sale:funkoToUpdate.sale})

    res.json(funkoToUpdate)
});

app.delete("/deleteFunko", async (req, res) => {
    const funkoToDelete = req.body;
    await funkoModel.deleteOne({name:funkoToDelete.name})

    res.json(funkoToDelete)
})

app.listen(3001, () => {
    console.log("Server surpreendentemente está funcionando! (Porta 3001)");
});