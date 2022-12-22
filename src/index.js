const express = require('express')
// Lấy path
const path = require('path')
// Quan sát sự thay đổi của trang web
const morgan = require('morgan')
// Chứa mã HTML
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

// Sử dụng middleware để lấy giá trị body-query parameters
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())



// Static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  // console.log(req.query.author)
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})