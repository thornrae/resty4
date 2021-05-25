import React from 'react';

import axios from 'axios';
import Form from '../components/Form.js';
import Results from '../components/Results.js';
import History from '../components/History.js';

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state= {
      history: [
        // { DUMMYDATA
        //   method: "GET", url: "http://taylor.com"
        // },
        // {
        //   method: "PUT", url: "http://hello.com"
        // },
        // {
        //   method: "POST", url: "http://goodbye.com"
        // },

      ], 
      results: {},
      url: '',
      method: ''
    }
  }

  fetch = async (formData) => {

    const method = formData.method || "get";
    const url = formData.url;
    const body = formData.body || {};

    const response = await axios( {
      method: method,
      url: url,
      body: body
    })

    //DUMMYDATA
    // let results = {
    //   headers: {
    //     authorization: "basic alsdfjk"
    //   },
    //   results: {
    //     count: 5, 
    //     results: [ {foo: "bar"}, {biz: "bop"}]
    //   }
    // }
    // console.log("got called with", formData);


    //save this in history once we have the data and set the state with new history and new results
    // let history = [...this.state.history, {method: "DELETE", url: "http://testing.com"}] -- this is example of adding something to state and having it render on the page. just need to set state to results, history to show
    const results = response.data;

    const entry = {
      method: formData.method,
      url: formData.url, 
      data: results
    }
    let history = [...this.state.history, entry];

    //this puts history into local storage
    localStorage.setItem('history', JSON.stringify(history));

    this.setState({results, history});

    //

    //as you type things into the form, the form manages the state, sends that back up to the home page the home page puts it into history and then the history component is alerted that this.state.history has been updated and then it re-renders. This is how we get the list history results list on the left side of the home page.
  }

  transferHistory = (entry) => {
    this.setState({...this.state, url: entry.url, method:entry.method })
  }

  
  //how and when do you get history from local storage? this method runs after the first render which means you can go to local storage and get history.
  //soon as fire app, going to render the page empty, go to local stoage, get history and then we're gonna setState history.  This is what keeps the history on your page after you refresh
  componentDidMount() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    this.setState({history});
  }

  

  render() {
    return (
      <div className="homeWrapper">
        <Form key={this.state.url} url={this.state.url} method={this.state.method} handler={this.fetch} />
        <div className="homeOutput">
          <History transfer={this.transferHistory} history={this.state.history} />
          <Results data={this.state.results} />
        </div>
      </div>
    )
  }
}

export default Home;

//in styling, homeWrapper will be flex column, outPut will be flex row so that they will be side by side.
//send history a property called history that contains state