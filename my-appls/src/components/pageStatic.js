import React from 'react';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="staticGeneralContainer">
        <div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Daily Score</a>
          <div className="coloredHeaderContentInnerContainer">
            <p className="standardText">Breakfast:</p>
            <div className="standardDivider"></div>
            <p className="standardText">Lunch:</p>
            <div className="standardDivider"></div>
            <p className="standardText">Dinner:</p>
          </div>
        </div>
        <div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Menu</a>
          <div className="coloredHeaderContentInnerContainer">
            <p className="standardText menuTitle">Breakfast<br/></p>
            <div className="standardDivider"></div>
            <p className="standardText menuTitle">Lunch<br/></p>
            <div className="standardDivider"></div>
            <p className="standardText menuTitle">Dinner<br/></p>
          </div>
        </div>
      </div>
    );
  };
}

export default StaticPage;