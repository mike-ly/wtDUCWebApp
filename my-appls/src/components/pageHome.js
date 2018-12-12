import React from 'react';
import WriteReview from './writeReview.js';
import Waypoint from 'react-waypoint';
import RateBar from './rateBar.js'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"];
    this.currentDate = new Date();
    this.state = {
      day: days[this.currentDate.getDay()],
      month: months[this.currentDate.getMonth()],
      dateNumber: this.currentDate.getDate(),
      activeMeal: this.decideActiveMeal(this.currentDate, this.props.mealTimes),
      feed: [],
    };

    console.log(this.decideActiveMeal(this.currentDate, this.props.mealTimes));
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

  decideActiveMeal(date, mealTimes) {
    if (date < mealTimes.breakfastStart) {
      return "preBreakfast";
    } else if (date < mealTimes.breakfastEnd) {
      return "breakfast";
    } else if (date < mealTimes.lunchStart) {
      return "preLunch";
    } else if (date < mealTimes.lunchEnd) {
      return "lunch";
    } else if (date < mealTimes.dinnerStart) {
      return "preDinner";
    } else if (date < mealTimes.dinnerEnd) {
      return "dinner";
    } else {
      return "postDinner";
    }
  }

  dateToTimeString(date) {
    const ampm = date.getHours() / 12 < 1 ? "AM" : "PM";
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return "" + hours + ":" + minutes + " " + ampm;
  }

  retriveReviews(date) {

  }

  appendReviewToFeed(name, score, text, school, diningHall, meal, date) {
    let feed = this.state.feed.slice();
    feed.append(this.renderReview(name, score, text, school, diningHall, meal, date));
    this.setState({
      feed: feed
    });
  }

  renderReview(name, score, text, school, diningHall, meal, date) {
    let hourString = "";
    let minuteString = "";
    
    let timeDifference = date.getTime() - (new Date().getTime());
    let minuteDifference = parseInt(timeDifference / 1000 / 60, 10);
    if (minuteDifference < 0) {
      alert("ERROR: review from the future!");
      return;
    }
    let hours = parseInt(minuteDifference / 60, 10);
    let minutes = minuteDifference % 60;

    let andString = "";
    if (hours > 0 && minutes > 0) {
      andString = " and";
    }
    if (hours === 0) {
      hourString = "";
    } else if (hours > 1) {
      hourString = " " + hours + " hours";
    } else if (hours > 0) {
      hourString = " " + hours + " hour";
    }
    if (minutes === 0) {
      minuteString = "";
    } else if (minutes > 1) {
      minuteString = " " + minutes + " minutes";
    } else if (minutes > 0) {
      minuteString = " " + minutes + " minute";
    }
    const dateString = hourString + andString + minuteString;
    return(
      <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
        <b>{name}</b>
        &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;{dateString}</span>
        &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;{school}</span>
        &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;{diningHall}</span>
        &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;{meal}</span><br/>
        {text}
      </p>
    );
  }

  render() {
    console.log("RENDER: HomePage");
    return(
      <div className="homeGeneralContainer">
        <div className="standardContentContainer homeContentContainerStatus z-depth-1">
          <div className="standardContentFlexRow">
            <p className="standardText standardTextPaddingHorizontal">
              <span className="homeOverviewToday">Emory University</span>
            </p>
            <p className="standardText">
              <span className="homeOverviewToday"><span className="homeOverviewDate">&bull;</span></span>
            </p>
            <p className="standardText standardTextPaddingHorizontal">
              <span className="homeOverviewToday"><span className="homeOverviewDate">{this.state.day}, {this.state.month} {this.state.dateNumber}</span></span>
            </p>
          </div>
          <div className="standardDivider"></div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText homeOverviewScoreTitle">Breakfast</p>
            <div className="standardContentFlexRow">
              <p className="standardText homeOverviewScoreTime">
                <span className={this.state.activeMeal === "preBreakfast" || this.state.activeMeal === "breakfast" ? "pulseBlue" : ""}>
                  {this.dateToTimeString(this.props.mealTimes.breakfastStart)}
                </span> 
                <span className={this.state.activeMeal === "breakfast" ? "pulseBlue" : ""}> &mdash; </span> 
                <span className={this.state.activeMeal === "breakfast" ? "pulseBlue" : ""}>
                  {this.dateToTimeString(this.props.mealTimes.breakfastEnd)}
                </span>
              </p>
              <RateBar
                score={Math.random() * 5}
              />
            </div>
          </div>
          <div className="standardContentPadding"><div className="standardDivider"></div></div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText homeOverviewScoreTitle">Lunch</p>
            <div className="standardContentFlexRow">
              <p className="standardText homeOverviewScoreTime">
                <span className={this.state.activeMeal === "preLunch" || this.state.activeMeal === "lunch" ? "pulseBlue" : ""}>
                  {this.dateToTimeString(this.props.mealTimes.lunchStart)}
                </span> 
                <span className={this.state.activeMeal === "lunch" ? "pulseBlue" : ""}> &mdash; </span> 
                <span className={this.state.activeMeal === "lunch" ? "pulseBlue" : ""}>
                  {this.dateToTimeString(this.props.mealTimes.lunchEnd)}
                </span>
              </p>
              <RateBar
                score={Math.random() * 5}
              />
            </div>
          </div>
          <div className="standardContentPadding"><div className="standardDivider"></div></div>
          <div className="standardContentPadding standardContentFlexRow homeOverviewScoreContainer">
            <p className="standardText homeOverviewScoreTitle">Dinner</p>
            <div className="standardContentFlexRow">
              <p className="standardText homeOverviewScoreTime">
                <span className={this.state.activeMeal === "preDinner" || this.state.activeMeal === "dinner" ? "pulseBlue" : ""}>
                  {this.dateToTimeString(this.props.mealTimes.dinnerStart)}
                </span> 
                <span className={this.state.activeMeal === "dinner" ? "pulseBlue" : ""}> &mdash; </span> 
                <span className={this.state.activeMeal === "dinner" ? "pulseBlue" : ""}>
                  {this.dateToTimeString(this.props.mealTimes.dinnerEnd)}
                </span>
              </p>
              <RateBar
                score={Math.random() * 5}
              />
            </div>
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
          {this.state.feed}
          {/*
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Goofy Goose</b>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;24m</span>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Emory University</span>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;DUC-ling</span>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span><br/>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
          <div className="standardDivider"></div>
          <p className="standardText standardTextPaddingHorizontal standardTextPaddingVertical">
            <b>Daffy Duck</b>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;11m</span>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Emory University</span>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;DUC-ling</span>
            &nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span><br/>
            Wouldn't recommend, workers are grumpy today >:(
          </p>
          */}
        </div>
      </div>
    );
  };
}

export default HomePage;