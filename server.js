/*
|----------------------------------------------
| setting up server entry point for the app
| @author: jahid haque <jahid.haque@yahoo.com>
| @copyright: 19dnorth, 2018
|----------------------------------------------
*/
require('dotenv').config({ silent: true });

const Express = require('express');
const Morgan = require('morgan');
const Hbs = require('express-handlebars');
const Path = require('path');
const BodyParser = require('body-parser');
const PublicRoutes = require('./app_client/routes/index');

const App = new Express();

App.engine('hbs', Hbs({ defaultLayout: 'master' }));
App.set('view engine', 'hbs');

App.use(Express.static(Path.join(__dirname + '/public')));

App.get('/', PublicRoutes);

App.listen(process.env.AppPort, () => {
    console.log(`App started on port ${process.env.AppPort}`);
});