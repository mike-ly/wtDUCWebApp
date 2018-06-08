import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="homeGeneralContainer">
        <div className="standardContentContainer homeContentContainerStatus">
          <p className="standardText standardTextPaddingHorizontal">
            <span className="homeOverviewToday">Today<span className="homeOverviewDate">&nbsp;&nbsp;&nbsp;Monday, May 21</span></span>
          </p>
          <div className="standardContentPadding"><div className="standardDivider"></div></div>
          <p className="standardText standardTextPaddingHorizontal">
            <span className="homeOverviewScoreContainer">Breakfast:&nbsp;&nbsp;
              <b className="homeOverviewScoreValue">1.23</b><span className="homeOverviewScoreDenominator">/5</span><br/>
            </span>
            <span className="homeOverviewStatus">Did someone say Ubereats?</span>
          </p>
        </div>
        <div className="standardContentContainer">
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="reviewDate">5/21/2018</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="reviewDate">5/21/2018</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
        </div>
      </div>
    );
  };
}

export default HomePage;