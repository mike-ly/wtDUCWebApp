import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="homeGeneralContainer">
        <div className="standardContentContainer">
          <p className="standardText">
            <b>Daily Overview</b>
          </p>
        </div>
        <div className="standardContentContainer">
          <p className="standardText">
            <b>Goofy Goose</b> wrote on <b>5/21/2018</b>
            <div className="standardDivider"></div>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
        </div>
        <div className="standardContentContainer">
          <p className="standardText">
            <b>Goofy Goose</b> wrote on <b>5/21/2018</b>
            <div className="standardDivider"></div>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
        </div>
        <div className="standardContentContainer">
          <p className="standardText">
            <b>Goofy Goose</b> wrote on <b>5/21/2018</b>
            <div className="standardDivider"></div>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
        </div>
        <div className="standardContentContainer">
          <p className="standardText">
            <b>Goofy Goose</b> wrote on <b>5/21/2018</b>
            <div className="standardDivider"></div>
            The DUC is not that good today, menu sucks. Better to go to COX.
          </p>
        </div>
      </div>
    );
  };
}

export default HomePage;