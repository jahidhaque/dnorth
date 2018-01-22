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

PublicRoute.get('/techpack', (req, res) => {
    res.render('techpack');
});

PublicRoute.get('/approach', (req, res) => {
    res.render('approach');
});

PublicRoute.get('/pricing', (req, res) => {
    res.render('pricing');
});

PublicRoute.get('/whatwedo', (req, res) => {
    res.render('whatwedo');
});

PublicRoute.get('/whywedo', (req, res) => {
    res.render('whywedo');
});

PublicRoute.get('/howwedo', (req, res) => {
    res.render('howwedo');
});

PublicRoute.get('/requirements', (req, res) => {
    res.render('requirements');
});

PublicRoute.get('/delivery', (req, res) => {
    res.render('delivery');
});

PublicRoute.get('/emailus', (req, res) => {
    res.render('emailus');
});

PublicRoute.get('/signup', (req, res) => {
    res.render('signup');
});

PublicRoute.get('/signin', (req, res) => {
    res.render('signin');
});

PublicRoute.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

PublicRoute.get('/help', (req, res) => {
    res.render('help');
});

PublicRoute.get('/feedback', (req, res) => {
    res.render('feedback');
});

module.exports = PublicRoute;