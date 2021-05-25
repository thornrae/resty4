import React from 'react';

class History extends React.Component{

  render() {
    return (
      <aside>
        {this.props.history.map (entry => 
        <div className="history" key={entry.url} onClick={() => this.props.transfer(entry)}>
          <span className="method">{entry.method}</span>
          <span className="url">{entry.url}</span>
        </div>
        )}
      </aside>
    )
  }
}

export default History;

//history to show some history in home component
//this means that home component needs to send history something to loop over
//the point of keys when you are looping over stuff: it needs something uniqe about them so that react can keep track of the mapped items
//Need to: tell home component that you clicked on one, then the home component needs to tell the form component new values for the form -- call this.props.transfer to do this. in the div is what has that info. it knows that the entry is what you are going to send to this.props.transfer.  RE that onClick and function callback... in order for it to not do that weird thing where every time it renders it tries to call it again, you need to add the () => inside the squiggles, on a click, it is a reference to a function that is going to run. Now we are saying run that arrow function that does that thing and this eliminates it calling itself everytime the page loads? 
// it is a function that calls a function. 
