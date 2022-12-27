const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');


function route(app) {
    app.use('/news', newsRouter);// cận thận trong việc để các url
    app.use('/me', meRouter);// cận thận trong việc để các url
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
