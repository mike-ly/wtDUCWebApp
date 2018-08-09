import React from 'react';
import DailyMenus from './dailyMenus';
import DailyStats from './dailyStats';
import Footer from './footer';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingOn: false
    };
  }

  // renderMenu(navBarState) {
  //   let navBar = [];
  //   for (var i = 0; i < navBarState.links.length; i++) {
  //     const isActive = (i === navBarState.activeLinkId);
  //     // return this.renderMenuItem(linkName, isActive);
  //     navBar.push(this.renderMenuItem(i, isActive));
  //   }
  //   return(navBar);
  // }

  // renderMenuItem(linkId, linkName, isActive) {
  //   return(
  //     <NavBarLink
  //       key={linkId}
  //       linkName={linkName}
  //       isActive={isActive}
  //       onClick={() => this.handleClick(linkId)}
  //     />
  //   );
  // }

  handleMenuClick(meal) {

  }

  componentDidMount() {
    this.setState({
      greetingOn: true
    });
  }

  render() {
    let greetingHeaderClass = this.state.greetingOn ? "standardText greetingText greetingHeaderText active" : "standardText greetingText greetingHeaderText";
    return(
      <div className="staticGeneralContainer">
        <div className="greetingContainer">
          <p className={greetingHeaderClass}>Good morning!</p>
          <p className="standardText greetingText statusText">Breakfast ends in 20 minutes</p>
          <p className="standardText greetingText">Check out the <span>menu</span>, <span>ratings</span>, and <span>reviews</span> before you decide to eat, and <span>Quack</span> about your meal after!</p>
        </div>
        <div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Menu</a>
          <div className="menuDatesContainer">
            <a className="standardText menuDateItemText active">Today</a>
            <a className="standardText menuDateItemText">Aug 5</a>
            <a className="standardText menuDateItemText">Aug 6</a>
            <a className="standardText menuDateItemText">Aug 7</a>
            <a className="standardText menuDateItemText">Aug 8</a>
          </div>
          <div className="flexDivider"></div>
          <DailyMenus
            onClick={(meal) => this.handleMenuClick()}
          />
        </div>
        <div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Stats</a>
          <DailyStats
              onClick={(meal) => this.handleMenuClick()}
          />
        </div>
        <div className="standardContentContainer">
          <Footer/>
        </div>
      </div>
    );
  };
}

export default StaticPage;