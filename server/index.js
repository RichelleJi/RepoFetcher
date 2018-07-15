const express = require('express');
let app = express();
var server = require('../helpers/github.js')
var db = require('../database/index.js')
var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log(req.method + '@ ' + Date());
  next();
});



app.post('/repos', function (req, res) {//check the format of the req.body
	// console.log('body', req.body);
	var endPoint = `/users/${Object.keys(req.body)[0]}/repos`;
	console.log(endPoint);
// This route should take the github username provided and get the repo information from the github API, then
	server.getReposByUsername(endPoint, (error, response, body) => {
		if(error){
			console.log(error);
			res.sendStatus(404);
		}else if(!error) {// save the repo information in the database
			db.save(body,(err, row) => {
				if(err){
					res.sendStatus(404);
				}else{
					db.queryTopRepo(function (err, results) {
					  if(results){
					  	res.status(201).send(results);
					  }else{
					  	res.sendstatus(404);
					  }
					})
				}
			});
	    }
  	});
});

app.get('/repos', function (req, res) {//for initial rendering This route should send back the top 25 repos for 
	db.queryTopRepo(function (err, results) {
      if(results){
      	res.status(201).json(results);
      }else{
      	res.sendstatus(404);
      }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});



/*
table: 

- user name

repo
-repo name
- repo link
-stargazers_count

*/

/*
Complete the POST /repos endpoint on your express server - in this route, you'll 
1.use your getReposByUsername function to fetch the specified user's GitHub repos,  
2.use your save function to store the repo information in database.
*/