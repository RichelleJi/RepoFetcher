
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err
  	var newData = JSON.parse(data)
  // return newData.length;
  var resultObj = newData.map((repo)=>{
	// return {repo.name, repo.html_url, repo.stargazers_count, repo.owner.login}
	return {repoName:repo.name, owner:repo.owner.login, url:repo.html_url, star:repo.stargazers_count};
});
   // console.log(newData.length);
   console.log(resultObj);
});


//  "html_url"
//  "name"
// stargazers_count


  // repoName: String,
  // owner: String,
  // url: String,
  // star: Number


//{repoName:repoName, owner:owner, url:url, stargazers:stargazers}



//epoName, owner, url, stargazers



// repoName:repoName, owner:owner, url:url, stargazers:stargazers

// var objAssign = function (repoName, owner, url, stargazers) {
// 	return {
// 		repoName,
// 		owner,
// 		url,
// 		stargazers
// 	};
// }
//
//


// // The ES3/ES5 equivalent would be:
// function getCar(make, model, value) {
// 	return {
// 		make: make,
// 		model: model,
// 		value: value
// 	};
// }