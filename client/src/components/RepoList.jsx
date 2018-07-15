import React from 'react';

const RepoList = (props) => {
	const listRepo = props.repos.map((repo)=>
		<div>{repo.star} stars 
		<a href = {repo.url}>{repo.repoName} </a>
		by: {repo.owner}
		</div>
		

	);

	return(

	  <div>
	    <h4> Top Repos Ranked by Star </h4>
	    <b>There are {props.repos.length} repos:</b>
	    <br />
	    {listRepo}
	  </div>
	)

}


export default RepoList;
