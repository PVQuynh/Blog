const mongoose = require('mongoose')

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)

const Schema = mongoose.Schema

const Course = new Schema({
    name: { type: String, maxLength: 255, require: true },
    description: {type: String, maxLength: 600 },
    image: {type: String },
    videoId: {type: String, maxLength: 255, require: true },
    level: {type: String, maxLength: 255 },
    slug: { type: String, slug: 'name' , unique: true},
    // createdAt: {type: Date, default: Date.now },
    // updatedAt: {type: Date, default: Date.now },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Course', Course)