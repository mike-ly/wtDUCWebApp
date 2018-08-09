import React from 'react';
import WriteReview from './writeReview.js';
import Waypoint from 'react-waypoint';
import RateBar from './rateBar.js'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps) {
    return false;
  }

  handleWaypointEnter() {
    this.props.navBarQuackDeactivate();
  }

  handleWaypointLeave() {
    this.props.navBarQuackActivate();
  }

  render() {
    console.log("RENDER: HomePage");
    return(
      <div className="homeGeneralContainer">
        <div className="standardContentContainer homeContentContainerStatus z-depth-1">
          <p className="standardText standardTextPaddingHorizontal">
            <span className="homeOverviewToday">Today<span className="homeOverviewDate">&nbsp;&nbsp;&nbsp;Monday, May 21</span></span>
          </p>
          <div className="standardContentPadding"><div className="standardDivider"></div></div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="homeOverviewActiveIcon">&bull;</p>
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">&nbsp;&nbsp;&nbsp;Breakfast</p>
            <RateBar
              score={Math.random() * 5}
            />
          </div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Lunch
            </p>
            <RateBar
              score={Math.random() * 5}
            />
          </div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText standardTextFloatLeft homeOverviewScoreTitle">
              Dinner
            </p>
            <RateBar
              score={Math.random() * 5}
            />
          </div>
          <div className="standardClear"></div>
        </div>
        <Waypoint
          onEnter={() => this.handleWaypointEnter(this)}
          onLeave={() => this.handleWaypointLeave(this)}
        >
          <div>
            <WriteReview/>
          </div>
        </Waypoint>
        <div className="standardContentContainer">
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
        </div>
      </div>
    );
  };
}

export default HomePage;