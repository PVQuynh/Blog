const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    home(req, res, next) {
        // res.render('home');

        // Sử dụng callback
        // Course.find({}, function(err, courses, next) {
        //     if (!err) {
        //         res.json(courses)
        //     }
        //     else {
        //         // res.status(400).json({error: 'ERROR!!!'})
        //         next(err);
        //     }
        // })

        // Sử dung promise
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())//chuyển sang 1 Object trước khi lấy dữ liệu
                res.render('home', {
                    courses: mutipleMongooseToObject(courses), //courses
                })
            })
            .catch(error => next(error)) // .catch(next) vì catch nhận 1 function
    }

    // [GET] /search
    search(req, res) {
        res.send('search');
    }
}

// Xuất ra ngoài
module.exports = new SiteController();
