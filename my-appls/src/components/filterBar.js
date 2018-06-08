import React from 'react';
import MaterialIcon from 'material-icons-react';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="filterBarGeneralContainer">
        <div className="contentContainer filterBarContentContainer">
          <a className="filterBarOptionContainer">
            <div className="standardText filterBarOptionButton">
              <MaterialIcon icon="location_on" color="#002878"/>
            </div>
            <div className="standardText filterBarOptionName">
              Emory University
            </div>
          </a>
          <div className="filterBarOptionDivider"></div>
          <a className="filterBarOptionContainer">
            <div className="standardText filterBarOptionButton">
              <MaterialIcon icon="store" color="#002878" />
            </div>
            <div className="standardText filterBarOptionName">
              DUC-ling
            </div>
          </a>
          <div className="filterBarOptionDivider"></div>
          <a className="filterBarOptionContainer">
            <div className="standardText filterBarOptionButton">
              <MaterialIcon icon="access_time" color="#002878" />
            </div>
            <div className="standardText filterBarOptionName">
              Breakfast
            </div>
          </a>
          <div className="filterBarOptionDivider"></div>
          <a className="filterBarOptionContainer">
            <div className="standardText filterBarOptionButton">
              <MaterialIcon icon="filter_list" color="#002878" />
            </div>
            <div className="standardText filterBarOptionName">
              Newest
            </div>
          </a>
        </div>
      </div>
    );
  };
}

export default FilterBar;