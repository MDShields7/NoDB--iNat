const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const favTaxa = 'hello';

app.get('/api/data', (req, res) => {
    console.log(favTaxa);
    res.status(200).send(favTaxa);
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