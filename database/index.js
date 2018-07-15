// shema module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', { useMongoClient: true }); //open a connection to the test database on our locally running instance of MongoDB.

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected! to MongoDB')
});

//schema is a giant array with multiple 
let repoSchema = mongoose.Schema({ 
  repoName: String,
  owner: String,
  url: String,
  star: Number
});

let Repo = mongoose.model('Repo', repoSchema); //compiling our schema into a Model.

// let save = (repoObj)=> { //In MongoDB, databases hold collections of documents.
//   var newData = JSON.parse(repoObj)
//   var len = newData.length - 1
//   newData.forEach((repo, index)=>{
//     var row = new Repo({repoName:repo.name, owner:repo.owner.login, url:repo.html_url, star:repo.stargazers_count});
//       row.save(function(err, row){
//         if (err) return console.error(err);
//         console.log(index + "/" + len + " ---- " + row.repoName + " ---- saved as document");
//       })
//   });
// }

let save = (repoObj, saveRepoCB)=> { //In MongoDB, databases hold collections of documents.
  var newData = JSON.parse(repoObj)
  var len = newData.length - 1
  newData.forEach((repo, index)=>{
    var row = new Repo({repoName:repo.name, owner:repo.owner.login, url:repo.html_url, star:repo.stargazers_count});
      row.save(function(err, row){
        if(err){
          saveRepoCB(err)
        }else{
          console.log(index + "/" + len + " ---- " + row.repoName + " ---- saved as document");
          if(index === len){
              saveRepoCB(null, row)
           }
        }
      })
  });
}

let queryTopRepo = (topRepoCB) => { // retrieves the top 25 repos for with a specific user 
  Repo.
    find().
    sort('-star').
    limit(25).
    exec(function (err, docs) {
      if(err){
        topRepoCB(err);
        console.error(err);
      }else{
          topRepoCB(null, docs);
      }
  })
}


module.exports = {
  save, 
  queryTopRepo
}


/*
=======Testing
const fs = require('fs');
fs.readFile('../data.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  save(data);
});


=============old version 

let save = (repoName, owner, url, stargazers)=> {
  var row = new Repo({repoName:repoName, owner:owner, url:url, stargazers:stargazers}); // Instances of Models are documents. Documents have many of their own built-in instance methods. We may also define our own custom document instance methods too.
  row.save(function(err, row){
    if (err) return console.error(err);
     console.log(row.repoName + " saved as document");
  })  
}

let dataCleaner = (data) => {
  fs.readFile('/data', (err, data) => {
  if (err) throw err;
  console.log(data);
});
}
save("recastly", 'richelleji', "www.wathaver.com", 100);

command: 
$mongo
$show dbs //show databses
$switched to db {fetcher}
$show collections
$db.repos.find() 


$ db.bookstore.find()


Document Structure:
{
   field1: value1,
   field2: value2,
   field3: value3,
   ...
   fieldN: valueN
}


table: 

- user name

repo
-repo name
- repo link
-stargazers_count

*/
