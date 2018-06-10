const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

app.use('/dist', express.static(__dirname + '/dist'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen( PORT, () => console.log(`server listening on port ${PORT}`));