const express = require('express');
const HTMLroutes = require('./routes/HTMLroutes')
const APIroutes = require('./routes/API-routes')
const PORT = 3001;

// dynamically set the port
const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(HTMLroutes);
app.use(APIroutes);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});