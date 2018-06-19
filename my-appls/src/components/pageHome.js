import React from 'react';
import MaterialIcon from 'material-icons-react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="homeGeneralContainer">
        <div className="standardContentContainer homeContentContainerStatus z-depth-1">
          <p className="standardText standardTextPaddingHorizontal">
            <span className="homeOverviewToday">Today<span className="homeOverviewDate">&nbsp;&nbsp;&nbsp;Monday, May 21</span></span>
          </p>
          <div className="standardContentPadding"><div className="standardDivider"></div></div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Breakfast
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
              Lunch
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
              Dinner
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
          <div className="writeReviewBar">
            <div className="writeReviewDisplayScoreBar">
              <p className="standardText writeReviewScoreTitle">Score =</p>
              <a className="writeReviewDisplayScoreBarUnit"><div className="writeReviewDisplayScoreBarUnitFill standardText">1</div></a>
              <div className="writeReviewDisplayScoreBarDivider"></div>
              <a className="writeReviewDisplayScoreBarUnit"><div className="writeReviewDisplayScoreBarUnitFill standardText">2</div></a>
              <div className="writeReviewDisplayScoreBarDivider"></div>
              <a className="writeReviewDisplayScoreBarUnit"><div className="writeReviewDisplayScoreBarUnitFill standardText">3</div></a>
              <div className="writeReviewDisplayScoreBarDivider"></div>
              <a className="writeReviewDisplayScoreBarUnit"><div className="writeReviewDisplayScoreBarUnitFill standardText">4</div></a>
              <div className="writeReviewDisplayScoreBarDivider"></div>
              <a className="writeReviewDisplayScoreBarUnit"><div className="writeReviewDisplayScoreBarUnitFill standardText">5</div></a>
            </div>
            <a className="writeReviewLink inactive z-depth-1">
              <MaterialIcon class="writeReviewIcon" icon="" size={16} />
              <span>Quack</span>
            </a>
          </div>
        </div>
        <div className="standardContentContainer">
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24 min</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11 min</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24 min</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11 min</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24 min</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11 min</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24 min</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11 min</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
        </div>
      </div>
    );
  };
}

export default HomePage;