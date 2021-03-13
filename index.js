const dbSetup = require('./db/db-setup');
const express = require('express');
const User = require('./db/models/user');

dbSetup();

const app = express();
app.use(express.json());

app.get('/user/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const user = await User.query().findById(id);
        res.json(user);
    } catch(err) {
        res.status(500).json(err);
    };
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
})