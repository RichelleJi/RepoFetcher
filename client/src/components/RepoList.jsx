import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

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



/*
	<div>
	    <h4> Top Repos Ranked by Star </h4>
	    There are {props.repos.length} repos.
	    <br />
	   {props.repos.map((repo)=>
		<label href = `${repo.url}`><br />{repo.repoName}</label>
		)}
	</div>



function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


{_id: "5b4a88d0af00d3290796e191", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
1
:
{_id: "5b4a89c8024a272968c39f78", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
2
:
{_id: "5b4a8a1c364cc6299f6fc94d", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
3
:
{_id: "5b4a8a2bf2ffbd29bd64230d", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
4
:
{_id: "5b4a8abd52235a2a24f52f9c", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
5
:
{_id: "5b4a8b3bf993642a687d7a0c", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
6
:
{_id: "5b4a8b9a72ff572a97d0ccda", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
7
:
{_id: "5b4a8bc5fb67322ab65cc779", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
8
:
{_id: "5b4a8c1df48bcc2ae3706bab", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
9
:
{_id: "5b4a916d2a03762c3be74842", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
10
:
{_id: "5b4a93c606536d2ce210eb5b", repoName: "babel-plugin-react-transform", owner: "gaearon", url: "https://github.com/gaearon/babel-plugin-react-transform", star: 1078, …}
11
:
{_id: "5b4a88d0af00d3290796e187", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
12
:
{_id: "5b4a89c8024a272968c39f6e", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
13
:
{_id: "5b4a8a1c364cc6299f6fc943", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
14
:
{_id: "5b4a8a2bf2ffbd29bd642303", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
15
:
{_id: "5b4a8abd52235a2a24f52f92", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
16
:
{_id: "5b4a8b3bf993642a687d7a02", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
17
:
{_id: "5b4a8b9a72ff572a97d0ccd0", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
18
:
{_id: "5b4a8bc5fb67322ab65cc76f", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
19
:
{_id: "5b4a8c1df48bcc2ae3706ba1", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
20
:
{_id: "5b4a916d2a03762c3be74838", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
21
:
{_id: "5b4a93c606536d2ce210eb51", repoName: "ama", owner: "gaearon", url: "https://github.com/gaearon/ama", star: 200, …}
22
:
{_id: "5b4a88d0af00d3290796e197", repoName: "base16-js", owner: "gaearon", url: "https://github.com/gaearon/base16-js", star: 26, …}
23
:
{_id: "5b4a89c8024a272968c39f7e", repoName: "base16-js", owner: "gaearon", url: "https://github.com/gaearon/base16-js", star: 26, …}
24
:
{_id: "5b4a8a1c364cc6299f6fc953", repoName: "base16-js", owner: "gaearon", url: "https://github.com/gaearon/base16-js", star: 26, …}
length
:
25
__proto__
:
Array(0)

*/