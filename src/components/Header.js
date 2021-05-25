import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component{

  render() {
    return (
      <header>
        <h1>Resty</h1>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Header;

// You can't style "Link" --> link results in an "a" tag, so add style "a" to style links
//The Link here changes the url
//Header is passed to app
//App decides what to render based on what the URL is