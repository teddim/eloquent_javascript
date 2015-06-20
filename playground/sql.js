express teas-express-raw-sql

"git init" - initial commit with all the stuff that express installed.

added "pg"

npm install

// create .gitignore file in app's main directory, put inside the file: "node_modules/**"
This allows you to not commit all the node modules

git add -N and git add -p .gitignore

// In terminal:
psql -d postgres
CREATE DATABASE tea_express_raw_sql
\c tea_express_raw_sql

// In app.js:



var pg = require('pg');
var connString = "postgres://localhost/tea_express_raw_sql";

var client = new pg.Client(connString);
client.connect(function(err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query('SELECT NOW() AS "theTIME"', function(err, result) {
    if (err) {
      return console.error('error running query', err);
    }
    console.log("PostgreSQL is totally hooking it up:", result.rows[0].theTime);
    client.end;
  });
});



// Start the server:

DEBUG=teas-express-raw-sql:* npm start

// Back in app.js:
// Wherever "users" exists, change it to "teas", because we're CRUDing teas instead
//
//
// Download Bootstrap off of website, then unzip, then move it to ./public directory
//
// Add to layout.jade file in the "head" tag (or basically just make sure it looks like this):
  title= title
  link(rel='stylesheet', href='/bootstrap/css/bootstrap.min.css')
  link(rel='stylesheet', href='/stylesheets/style.css')
  script(src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js")
  script(src='/bootstrap/js/boostrap.min.js')

// Restart server, go to browser, see if the root path changed fonts

// Make new dirs/file:
app/migrations/createTeas.js

// Inside createTeas.js:



var pg = require('pg');
var connString = "postgres://localhost/tea_express_raw_sql";

var client = new pg.Client(connString);
client.connect();

var query = client.query('CREATE TABLE teas(id SERIAL PRIMARY KEY, name VARCHAR(40) not null, country VARCHAR(40), price INTEGER, reorderable BOOLEAN not null default true)');
query.on('end', function() { client.end(); });



// THEN, in the terminal, run
"node app/migrations/createTeas.js"

// Add a tea from the terminal:
INSERT INTO teas (name, country, price, reorderable)
VALUES ('Genmaicha', 'Japan', 3, true);

// Add to routes/teas.js:

var pg = require('pg');
var connString = "postgres://localhost/tea_express_raw_sql";

router.get('/', function(req, res, next) {
  var teas = [];
  pg.connect(connString, function(err, client, done) {
    if (err) return console.log(err);
    var query = client.query("SELECT * FROM teas");
    query.on('row', function(row) {
      teas.push(row);
    });
    query.on('end', function() {
      done();
      res.render('teas/index', ({teas: teas}));
    });
  });
});



// Create a file inside views:  teas/index.jade
// Inside that file:

extends ../layout

block content
  h1(class="page-header") See all of my teas!
  table(class="table")
    thead
      th Name
      th Country of Origin
      th Price
      th Reorderable?
    tbody
      each tea in teas
        tr
          td= tea.name
          td "#{tea.country}"
          td= tea.price
          td= tea.reorderable ? "Yes!" : "No :("



// Added link to root path's index.jade:
// a(href="/teas") Check out my awesome teas!

// Added a new button to create a new tea, added a new route to the teas routes, added form with bootstrapping to views/teas/new.jade


// GENERAL TIPS:
- Quitting psql: \q
// - if there's an error, ask: "What did I do differently than I did before?" Troubleshoot yourself, in very small steps backwards.  Try that for 30 minutes before you ask the internet.
// - \d gives all tables.  \d table_name shows the structure of that specific table.
// - PostgreSQL commands like single quotes, not double.
