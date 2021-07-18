const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayouts: 'main-layout'}));
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not found'});
});

app.listen(3000);
