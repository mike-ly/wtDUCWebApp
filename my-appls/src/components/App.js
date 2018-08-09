import React from 'react';
import NavBar from './navBar.js';
import HomePage from './pageHome.js';
import StaticPage from './pageStatic.js';
import FilterBar from './filterBar.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarQuackActive: false
    };
  }

  navBarQuackActivate() {
    this.setState({
      navBarQuackActive: true
    });
  }

  navBarQuackDeactivate() {
    this.setState({
      navBarQuackActive: false
    });
  }

  render() {
    return(
    	<div className="appContainer">
	      <NavBar
          navBarQuackActive={this.state.navBarQuackActive}
        />
        <FilterBar/>
        <div className="contentContainer appContentContainer">
	       <HomePage
          navBarQuackActivate={() => this.navBarQuackActivate()}
          navBarQuackDeactivate={() => this.navBarQuackDeactivate()}
         />
         <StaticPage/>
        </div>
      </div>
    );
  };
}

export default App;