const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const routes = require('./routes/routes');

app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});
