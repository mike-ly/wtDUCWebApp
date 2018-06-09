import React from 'react';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <div className="coloredHeaderContentInnerContainer">
            <a className="standardText standardTextPaddingHorizontal menuTitle">Breakfast<br/></a>
            <div className="standardDividerNoMargin"></div>
            <a className="standardText standardTextPaddingHorizontal menuTitle">Lunch<br/></a>
            <div className="standardDividerNoMargin"></div>
            <a className="standardText standardTextPaddingHorizontal menuTitle">Dinner<br/></a>
          </div>
        </div>
      </div>
    );
  };
}

export default StaticPage;