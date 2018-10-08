const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const favTaxa = [
    {name:'name',latin_name:'latin_name',id:00000,wiki_url:'http://url.com',photo:'http://photo.jpg'}
    ];
const favTaxaId = 0;

//App.js sends get request to local server
app.get('/api/data', (req, res) => {
    console.log('get success',favTaxa);
    res.status(200).send(favTaxa);
})
//App.js sends post request to local server
app.post('/api/data', (req, res) => {
    // let {name, latin_name, id, wiki_url, photo,} = req.body;
    // const newTaxa = {
    //     name,
    //     latin_name,
    //     id,
    //     wiki_url,
    //     photo
    // }
    favTaxa.push(req.body.id)
    // console.log('req.body',req.body);
    //id = id + 1;
    //favTaxa.push(newTaxa);
    console.log('post success', favTaxa);
    res.status(200).json(favTaxa)
})
app.put('/api/data', (req, res) => {
    //Put code
    console.log('put success', favTaxa);
    res.status(200).send(favTaxa)
})
app.delete('/api/data', (req, res) => {
    //Delete code
    console.log('delete success', favTaxa);
    res.status(200).send(favTaxa)
})
const port = 4000;
app.listen(port, () => console.log( `All systems go, approaching at vector ${port}`))

/*
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const data ="How are you gentlemen."
app.get('/api/data', (req, res) => {
    console.log(data);
    res.status(200).send(data);
})
const PORT = 4001;
app.listen(PORT, () => console.log(`All systems go, approaching at vector ${PORT}`));
*/