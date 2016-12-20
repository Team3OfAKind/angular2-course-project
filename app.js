/* globals require  */

const express = require('express');

let app = express();

app.set('view engine', 'pug');

app.use('/libs', express.static('./node_modules'));
app.use('/static', express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

let products = [
    { name: 'Food' },
    { name: 'Food2' },
    { name: 'Food3' },
    { name: 'Food4' }
];

app.get('/api/products', (req, res) => {
    res.send({
        result: products
    });
});


app.listen(3000, () => console.log('App listening on :3000'));
