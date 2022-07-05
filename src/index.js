const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api.js');
const path = require('path');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', api);

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.send('Сервер уже запущен, можно работать! =)');
})

const startServer = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер стартовал на ${PORT} порту`));
    } catch (e) {
        console.log(e);
    }
}

startServer();