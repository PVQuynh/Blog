const express = require('express');
const methodOVerride=  require('method-override')
// Lấy path
const path = require('path');
// Quan sát sự thay đổi của trang web
const morgan = require('morgan');
// Chứa mã HTML
const handlebars = require('express-handlebars');


// Lấy ra route
const route = require('./routers');
const db = require('./config/db')
db.connect();

const app = express();
const port = 3000;
// Sử dụng middleware để lấy giá trị body-query parameters
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOVerride('_method'))

// Static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        helpers: {
            sum: (a,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
