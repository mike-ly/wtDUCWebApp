import React from 'react';
import MaterialIcon from 'material-icons-react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ["Home", "Menus", "Stats"],
      activeLinkId: 0,
    };
  }

  renderLinks(navBarState) {
    let navBar = [];
    for (var i = 0; i < navBarState.links.length; i++) {
      const linkName = navBarState.links[i];
      const isActive = (i === navBarState.activeLinkId);
      // return this.renderLink(linkName, isActive);
      navBar.push(this.renderLink(i, linkName, isActive));
    }
    return(navBar);
  }

  renderLink(linkId, linkName, isActive) {
    return(
      <NavBarLink
        key={linkId}
        linkName={linkName}
        isActive={isActive}
        onClick={() => this.handleClick(linkId)}
      />
    );
  }

  handleClick(linkId) {
    let linksCopy = this.state.links.slice();
    if (linkId !== this.state.activeLinkId) {
      this.setState({
        links: linksCopy,
        activeLinkId: linkId,
      });
    }
  }

  render() {
    return(
      <div className="navBarGeneralContainer generalContainer">
        <div className="contentContainer navBarContentContainer">
          <div className="navBarSectionLeft">
            {this.renderLinks(this.state)}
          </div>
          <img className="navBarLogo" src={require('../images/logoOriginalBlue.png')} alt="Quack" />
          <div className="navBarSectionRight">
          </div>
        </div>
      </div>
    );
  }
}

function NavBarLink(props) {
  const classes = props.isActive ? "navBarLink active" : "navBarLink";

  return (
    <a className={classes} onClick={props.onClick}>
      <MaterialIcon icon="" size={16} color="#002878" />
      <span className="navBarLinkText">{props.linkName}</span>
      <div className="navBarLinkUnderline"></div>
    </a>
  );
}

export default NavBar;