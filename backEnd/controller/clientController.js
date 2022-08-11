const Client = require('../models/Client');
const fs = require('fs');
//const helper = require('../helper/fileHandling')

const JSON_CLINTS_ADRESS = "../data/clients.json"

function convertJsonToArray(){
    var stringData = fs.readFileSync(JSON_CLINTS_ADRESS)
    var data = JSON.parse(stringData)

    var clientArray = []
    for(var i=0; i<data.lenght ; i++){
        clientArray.push(data[i])
    }

    return clientArray;
}

async function registerNewUser(req, res) {
    if(req.body.password === req.body.confirmPassword){
        var vetClients = convertJsonToArray();
        const newClient = new Client(req.body.name, req.body.email, req.body.phoneNumber, req.body.password)

        //ta certo?
        for(var i=0; i<vetClients.length ;i++){
            if(vetClients[i].email === newClient.email){
                return res.send({'message':'This email has already been used'})
            }
            if(vetClients[i].name === newClient.name){
                return res.send({'message':'This email has already been used'})
            }
        }

        vetClients.push(newClient)
        const clientJson = JSON.stringify(vetClients);
        fs.writeFileSync(JSON_CLINTS_ADRESS,clientJson,"utf-8");
    }

    return res.send({'message':'Passwords do not match'})
}

async function login(req,res) {
    var clients = convertJsonToArray()

    //ta certo?
    for(var i=0; i<clients.length ;i++){
        if(clients[i].name === req.body.name){
            if(clients[i].password === req.body.password){
                return res.send({'message':'successful login'})
            }
        }
    }

    return res.send({'message':'User not found'})
}

module.exports = {
    registerNewUser,
    login,
};