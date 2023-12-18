const  express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.send('Welcome Restaurant Service')
});

require("./app/routes/restaurant-routes.js")(app);

app.listen(PORT, () =>{
    console.log(`Node running on port ${PORT}`)
});
