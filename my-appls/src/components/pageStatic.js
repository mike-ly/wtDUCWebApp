import React from 'react';
import DailyMenus from './dailyMenus';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return(
      <div className="staticGeneralContainer">
        {/*<div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Daily Score</a>
          <div className="coloredHeaderContentInnerContainer">
            <p className="standardText standardTextPaddingHorizontal scoreText">Breakfast:</p>
            <div className="standardDividerNoMargin"></div>
            <p className="standardText standardTextPaddingHorizontal scoreText">Lunch:</p>
            <div className="standardDividerNoMargin"></div>
            <p className="standardText standardTextPaddingHorizontal scoreText">Dinner:</p>
          </div>
        </div>*/}
        <div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Current Menu</a>
          <DailyMenus
            onClick={(meal) => this.handleMenuClick()}
          />
        </div>
      </div>
    );
  };
}

export default StaticPage;