/*
|----------------------------------------------
| setting up routes for public side of the app
| @author: jahid haque <jahid.haque@yahoo.com>
| @copyright: 19dnorth, 2018
|----------------------------------------------
*/

const Express = require('express');
const PublicRoute = Express.Router();

PublicRoute.get('/', (req, res) => {
    res.render('index');
});

module.exports = PublicRoute;