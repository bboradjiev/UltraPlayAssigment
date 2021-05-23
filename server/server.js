const express = require('express');
const cors = require('cors');
const fetch = require('isomorphic-fetch');
const xml2js = require('xml2js').parseString;

const app = express();

app.use(cors());

app.get('/matches', async (req, res) => {
    const data = await fetch('https://sports.ultraplay.net/sportsxml?clientKey=1bf3f918-fa27-4400-8815-d14a130f6851&sportId=2357').then(response => response.text())

    xml2js(data, (err, result) => {
        if (err) {
            console.log('error')

            res.status(500).send(err);
        }

        res.send(result);
    });
});

const port = process.env.PORT || 8081;

app.listen(port);
console.info(`Listening on port ${port}`);
