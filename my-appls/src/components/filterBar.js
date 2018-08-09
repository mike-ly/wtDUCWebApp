import React from 'react';
import MaterialIcon from 'material-icons-react';
import FilterBarItem from './filterBarItem.js';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasActivated: false
    };
  }

  render() {
    return(
      <div className="filterBarGeneralContainer">
        <div className="contentContainer filterBarContentContainer">
          <div className="filterBarSectionContainer">
            <a className="filterBarActivationContainer">
              <div className="standardText filterBarActivationButton">
                <MaterialIcon icon="location_on" color="#757575"/>
              </div>
              <div className="standardText filterBarName">
                Emory University
              </div>
            </a>
          </div>
          <div className="filterBarActivationDivider"></div>
          <FilterBarItem 
            key={0}
            options={["DUC-ling", "Rollin's Café", "SAAC Café", "Ray's at WREC"]} 
            icon="store"
            parentActivation={() => this.handleOptionActivation()}
          />
          <div className="filterBarActivationDivider"></div>
          <FilterBarItem 
            key={1}
            options={["Today", "This week", "This month", "This year"]} 
            icon="date_range"
            parentActivation={() => this.handleOptionActivation()}
          />
          <div className="filterBarActivationDivider"></div>
          <FilterBarItem 
            key={2}
            options={["All", "Breakfast", "Lunch", "Dinner"]} 
            icon="fastfood"
            parentActivation={() => this.handleOptionActivation()}
          />
          <div className="filterBarActivationDivider"></div>
          <FilterBarItem 
            key={3}
            options={["Hot", "New", "Top", "Low"]} 
            icon="filter_list"
            parentActivation={() => this.handleOptionActivation()}
          />
        </div>
      </div>
    );
  };

   handleOptionActivation() {
    this.setState({
      hasActivated: !this.state.hasActivated
    });
   }
}

export default FilterBar;