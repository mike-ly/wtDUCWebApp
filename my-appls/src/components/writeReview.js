import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: null,
    };
  }

  render() {
    let writeReviewDisplayScoreBarUnitFillClass1;
    let writeReviewDisplayScoreBarUnitFillClass2;
    let writeReviewDisplayScoreBarUnitFillClass3;
    let writeReviewDisplayScoreBarUnitFillClass4;
    let writeReviewDisplayScoreBarUnitFillClass5;
    if (this.state.score === 5) {
      writeReviewDisplayScoreBarUnitFillClass1 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass2 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass3 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass4 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass5 = "standardText writeReviewDisplayScoreBarUnitFill active";
    } else if (this.state.score === 4) {
      writeReviewDisplayScoreBarUnitFillClass1 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass2 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass3 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass4 = "standardText writeReviewDisplayScoreBarUnitFill active";
      writeReviewDisplayScoreBarUnitFillClass5 = "standardText writeReviewDisplayScoreBarUnitFill";
    } else if (this.state.score === 3) {
      writeReviewDisplayScoreBarUnitFillClass1 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass2 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass3 = "standardText writeReviewDisplayScoreBarUnitFill active";
      writeReviewDisplayScoreBarUnitFillClass4 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass5 = "standardText writeReviewDisplayScoreBarUnitFill";
    } else if (this.state.score === 2) {
      writeReviewDisplayScoreBarUnitFillClass1 = "standardText writeReviewDisplayScoreBarUnitFill filled";
      writeReviewDisplayScoreBarUnitFillClass2 = "standardText writeReviewDisplayScoreBarUnitFill active";
      writeReviewDisplayScoreBarUnitFillClass3 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass4 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass5 = "standardText writeReviewDisplayScoreBarUnitFill";
    } else if (this.state.score === 1) {
      writeReviewDisplayScoreBarUnitFillClass1 = "standardText writeReviewDisplayScoreBarUnitFill active";
      writeReviewDisplayScoreBarUnitFillClass2 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass3 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass4 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass5 = "standardText writeReviewDisplayScoreBarUnitFill";
    } else {
      writeReviewDisplayScoreBarUnitFillClass1 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass2 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass3 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass4 = "standardText writeReviewDisplayScoreBarUnitFill";
      writeReviewDisplayScoreBarUnitFillClass5 = "standardText writeReviewDisplayScoreBarUnitFill";
    }

    return(
      <div className="standardContentContainer writeReviewContainer">
        <TextareaAutosize maxRows={10} autoFocus className="writeReviewInput" placeholder="How was the DUC-ling today?" />
        <div className="writeReviewBar">
          <div className="writeReviewDisplayScoreBar">
            <p className="standardText writeReviewScoreDenominator">/5</p>
            <a id="writeReviewDisplayScoreBarUnit5" className="writeReviewDisplayScoreBarUnit" onClick={() => this.handleScoreClick(5)}><div className={writeReviewDisplayScoreBarUnitFillClass5}>5</div></a>
            <a id="writeReviewDisplayScoreBarUnit4" className="writeReviewDisplayScoreBarUnit" onClick={() => this.handleScoreClick(4)}><div className={writeReviewDisplayScoreBarUnitFillClass4}>4</div></a>
            <a id="writeReviewDisplayScoreBarUnit3" className="writeReviewDisplayScoreBarUnit" onClick={() => this.handleScoreClick(3)}><div className={writeReviewDisplayScoreBarUnitFillClass3}>3</div></a>
            <a id="writeReviewDisplayScoreBarUnit2" className="writeReviewDisplayScoreBarUnit" onClick={() => this.handleScoreClick(2)}><div className={writeReviewDisplayScoreBarUnitFillClass2}>2</div></a>
            <a id="writeReviewDisplayScoreBarUnit1" className="writeReviewDisplayScoreBarUnit" onClick={() => this.handleScoreClick(1)}><div className={writeReviewDisplayScoreBarUnitFillClass1}>1</div></a>
            <p className="standardText writeReviewScoreTitle">Score =</p>
          </div>
          <div className="flexDivider writeReviewFlexDivider"></div>
          <p className="standardText writeReviewDescriptionText">
            <b>Cool Cow (you)</b>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;Breakfast</span>&nbsp;&nbsp;<span className="reviewDate">&bull;&nbsp;&nbsp;now</span>
          </p>
          <a className="writeReviewLink z-depth-1">
            <span>Quack</span>
          </a>
        </div>
      </div>
    );
  };

  handleScoreClick(score) {
    this.setState({
      score: score
    });
  }
}

export default WriteReview;