import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [
      {repoName: "Richelleji"}
      ]
    }

  }

  componentDidMount() {
    this.getRequest()
  }

  search (term) {
    console.log(`${term} was searched`);
    var url = 'http://127.0.0.1:1128/repos';
    // var success = () => {this.getRequest()};
    var success = (data) => {
      console.log("POst request successful ==========");
      console.log(data);
      // data = JSON.parse(d ata);
      this.setState({repos:data})
    };
    $.ajax({
      type: "POST",
      url: url,
      data: term,
      success: success
      // dataType: "json"
    });
  }

  getRequest () {
    var url = 'http://127.0.0.1:1128/repos';
    var success = (data) => {
      console.log("get request successful ==========");
      this.setState({repos:data})
    };
    $.ajax({
      type: "GET",
      url: url,
      success: success,
      dataType: "json"
    });
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


