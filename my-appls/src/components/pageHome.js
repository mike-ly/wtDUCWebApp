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
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Breakfast:
            </p>
            <div className="displayScoreBar">
              <div className="displayScoreBarUnit"><div className="displayScoreBarUnitFill"></div></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
            </div>
            <p className="standardText homeOverviewScoreDenominator">&nbsp;&nbsp;&nbsp;1/5 <span className="homeOverviewScoreReviewCount"></span></p>
          </div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Lunch:
            </p>
            <div className="displayScoreBar">
              <div className="displayScoreBarUnit"><div className="displayScoreBarUnitFill"></div></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
            </div>
            <p className="standardText homeOverviewScoreDenominator">&nbsp;&nbsp;&nbsp;1/5 <span className="homeOverviewScoreReviewCount"></span></p>
          </div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Dinner:
            </p>
            <div className="displayScoreBar">
              <div className="displayScoreBarUnit"><div className="displayScoreBarUnitFill"></div></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
              <div className="displayScoreBarDivider"></div>
              <div className="displayScoreBarUnit"></div>
            </div>
            <p className="standardText homeOverviewScoreDenominator">&nbsp;&nbsp;&nbsp;1/5 <span className="homeOverviewScoreReviewCount"></span></p>
          </div>
          <div className="standardClear"></div>
          {/*<p className="standardText standardTextPaddingHorizontal homeOverviewStatus">Did someone say Ubereats?</p>*/}
        </div>
        <div className="standardContentContainer writeReviewContainer z-depth-">
          <textarea autoFocus className="writeReviewInput" placeholder="How was the DUC-ling today?" />
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