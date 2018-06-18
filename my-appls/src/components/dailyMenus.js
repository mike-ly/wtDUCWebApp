import React from 'react';

class dailyMenus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mealStatuses: [true, false, false]
    }
  }

  render() {
  	return (
  		<div className="coloredHeaderContentInnerContainer">
        {this.renderMenu(this.props, this.state.mealStatuses[0], "Breakfast")}
        {this.renderMenu(this.props, this.state.mealStatuses[1], "Lunch")}
        {this.renderMenu(this.props, this.state.mealStatuses[2], "Dinner")}
      </div>
  	);
  }

  renderMenu(props, isActive, meal) {
    return (
      <DailyMenu
        isActive={isActive}
        onClick={() => this.handleMenuClick(meal)}
        meal={meal}
      />
    );
  }

  handleMenuClick(meal) {
    console.log("went off");
    var meals = ["Breakfast", "Lunch", "Dinner"];
    var index = meals.indexOf(meal);
    const mealStatuses = [false, false, false]
    mealStatuses[index] = !mealStatuses[index];
    this.setState({
      mealStatuses: mealStatuses
    });
  }

}

function DailyMenu(props) {
  const titleClass = props.isActive ? "standardText standardTextPaddingHorizontal menuTitle active" : "standardText standardTextPaddingHorizontal menuTitle";
  const contentClass = props.isActive ? "menuContainer active" : "menuContainer";

  return (
    <div>
      <a className={titleClass} onClick={props.isActive ? null : props.onClick}>{props.meal}<br/></a>
      <div className={contentClass}>

      </div>
      <div className="standardDividerNoMargin"></div>
    </div>
  );
}

export default dailyMenus;