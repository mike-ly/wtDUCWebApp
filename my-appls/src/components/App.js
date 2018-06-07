import React from 'react';
import NavBar from './navBar.js';
import HomePage from './pageHome.js';
import StaticPage from './pageStatic.js';
import FilterBar from './filterBar.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    	<div className="appContainer">
	      <NavBar/>
        <FilterBar/>
        <div className="contentContainer appContentContainer">
	       <HomePage/>
         <StaticPage/>
        </div>
      </div>
    );
  };
}

export default App;