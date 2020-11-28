/**
* Module dependencies.
*/
var express = require('express')
  , mysql = require('mysql')
  , request = require('request')
  , bodyParser = require('body-parser')
  , cors = require('cors');

var app = express();

//Connection MySQL
var connection = mysql.createConnection({
    host     :  process.env.MYSQL_HOST_IP,
    user     :  process.env.MYSQL_USER,
    password :  process.env.MYSQL_PASSWORD,
    database :  process.env.MYSQL_DATABASE
  });
 
connection.connect((err) => {
    if (err) {
        console.error('error connecting mysql: ', err);
    } else {
        console.log('mysql connection successful');
        app.listen(process.env.REACT_APP_SERVER_PORT, (err) => {
            if (err) {
                console.error('Error starting  server', err);
            } else {
                console.log('server listening at port ' + process.env.REACT_APP_SERVER_PORT);
            }
        });
    }
});

// Set global var
global.db = connection;
global.request = request;
 
// all environments
app.set('port', process.env.REACT_APP_SERVER_PORT || 8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({credentials: true}));

// home page
app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Server Running'
	});
});

//Error 404
app.get('*', function(req, res) {
    res.status(404).send('Error 404 : Not found');
});
app.post('*', function(req, res) {
    res.status(404).send('Error 404 : Not found');
});