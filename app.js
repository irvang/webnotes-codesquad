const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

// console.log(process)
const notes = [
  'http is a protocoler',
  'http requests have a url, method, header, and body'
];

let dateToday = new Date();
dateToday = `${dateToday.getDate()}-${dateToday.getMonth()}-${dateToday.getFullYear()}`;

const dates = ['5/18/19', '3-4-18', dateToday];

app.set('view engine', 'ejs');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// app.set('views', './views');
// console.log(app.get('view engine'))
// console.log(app.get('views'))

let myCallbackBlue = function (req, res) {
  res.render('notes', { notes, dates });
}

app.get('/', myCallbackBlue);


app.post('/notes', (req, res) => {
  notes.push(req.body.note);
  console.log(req.body.note);
  res.send(notes);
});

app.delete('/notes/:id', (req, res) => {
  console.log(req.params);
  notes.splice(req.params.id, 1);
  console.log(notes);

  let resObject = {
    msg: 'deleted something',
    index: req.params.id
  };

  res.send(resObject);
});

// res.redirect('/');



app.listen(PORT, console.log(`Server listening on port: ${PORT}`))