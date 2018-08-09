import React from 'react';
import RateBar from './rateBar.js'
// import MaterialIcon from 'material-icons-react';

class DailyStats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    console.log("RENDER: DailyStats");
  	return (
  		<div>
        {this.renderDailyStats()}
      </div>
  	);
  }

  renderDailyStats() {
    let dailyStats = [];
    for (let i = 0; i < 5; i++) {
      dailyStats.push(this.renderDailyStat(i));
    }
    return dailyStats;
  }

  renderDailyStat(index) {
    return(
      <DailyStat
        key={index}
        isOdd={index % 2 === 0}
      />
    );
  }
}

function DailyStat(props) {
  const statContainerClass = props.isOdd ? "statContainer odd" : "statContainer even";
  return (
    <div>
      {/*<a className={titleClass} onClick={props.onMenuClick}>{props.meal}<br/></a>*/}
      <a className={statContainerClass}>
        <div className="statGrid">
          <div className="statDateContainer">
            <div className="statDate z-depth-">
              <p class="statDateMonth">May</p>
              <p class="statDateDay">21</p>
            </div>
          </div>
          <div className="statInfoContainer">
            <RateBar
              score={Math.random() * 5}
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default DailyStats;