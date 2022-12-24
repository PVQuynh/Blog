const Course = require('../models/Course')

class SiteController {
    // [GET] /
    home(req, res) {
        // res.render('home');
        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses)
            }
            else {
                res.status(400).json({error: 'ERROR!!!'})
            }
        })
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

// Xuất ra ngoài
module.exports = new SiteController();
