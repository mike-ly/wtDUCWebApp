import React from 'react';
import MaterialIcon from 'material-icons-react';
// import displayScoreBar from './displayScoreBar';

function DisplayScoreBar(props) {
  return(
    <div className="displayScoreBar">
      <div className="displayScoreBarUnit"><div className={props.unit1} style={props.unit1style}></div></div>
      <div className="displayScoreBarDivider"></div>
      <div className="displayScoreBarUnit"><div className={props.unit2} style={props.unit2style}></div></div>
      <div className="displayScoreBarDivider"></div>
      <div className="displayScoreBarUnit"><div className={props.unit3} style={props.unit3style}></div></div>
      <div className="displayScoreBarDivider"></div>
      <div className="displayScoreBarUnit"><div className={props.unit4} style={props.unit4style}></div></div>
      <div className="displayScoreBarDivider"></div>
      <div className="displayScoreBarUnit"><div className={props.unit5} style={props.unit5style}></div></div>
      <p className="standardText homeOverviewScoreDenominator">&nbsp;&nbsp;&nbsp;= {props.scoreByFive} <span className="homeOverviewScoreReviewCount"></span></p>
    </div>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDisplayScoreBar(meal) {
    const numbers = ["one", "two", "three", "four", "five"];
    const score = Math.random() * 5;
    let leftover = Math.round((score % 1) * 100);
    let scoreByFive = Math.round(score * 100) / 100;
    const truncScore = Math.trunc(score);
    const unit1 = "displayScoreBarUnitFill" + (score > 0 ? " " + numbers[truncScore] : "");
    const unit2 = "displayScoreBarUnitFill" + (score > 1 ? " " + numbers[truncScore] : "");
    const unit3 = "displayScoreBarUnitFill" + (score > 2 ? " " + numbers[truncScore] : "");
    const unit4 = "displayScoreBarUnitFill" + (score > 3 ? " " + numbers[truncScore] : "");
    const unit5 = "displayScoreBarUnitFill" + (score > 4 ? " " + numbers[truncScore] : "");
    const unit1style = { width: (truncScore === 0 ? (leftover + "%") : "100%")};
    const unit2style = { width: (truncScore === 1 ? (leftover + "%") : "100%")};
    const unit3style = { width: (truncScore === 2 ? (leftover + "%") : "100%")};
    const unit4style = { width: (truncScore === 3 ? (leftover + "%") : "100%")};
    const unit5style = { width: (truncScore === 4 ? (leftover + "%") : "100%")};
    return(
      <DisplayScoreBar
        unit1={unit1}
        unit2={unit2}
        unit3={unit3}
        unit4={unit4}
        unit5={unit5}
        unit1style={unit1style}
        unit2style={unit2style}
        unit3style={unit3style}
        unit4style={unit4style}
        unit5style={unit5style}
        scoreByFive={scoreByFive}
      />
    );
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
            {this.renderDisplayScoreBar("Breakfast")}
          </div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Lunch
            </p>
            {this.renderDisplayScoreBar("Lunch")}
          </div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Dinner
            </p>
            {this.renderDisplayScoreBar("Dinner")}
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
              <MaterialIcon className="writeReviewIcon" icon="" size={16} />
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