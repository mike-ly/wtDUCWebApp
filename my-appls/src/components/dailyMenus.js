import React from 'react';

class dailyMenus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mealStatuses: [true, false, false],
      meals: ["Breakfast", "Lunch", "Dinner"],
      generalMenu: [['Scrambled Tofu', 'Scrambled Eggs', 'Bacon', 'Turkey Bacon', 'Chicken Sausage', 'Pork Sausage', 'Turkey Sausage', 'Vegan Sausage Link', 'Biscuit', 'Hash Browns', 'Breakfast Potatoes', 'Tater Tots', 'Buttermilk Pancakes', 'Texas French Toast', 'Low Fat Fruit Yogurt', 'Lowfat Vanilla Yogurt', 'Plain Greek Yogurt', 'Cottage Cheese', 'Belgian Waffle', 'Pancake Syrup'],
                    ['Cheese Pizza', 'Pepperoni Pizza', 'Vegetable Pizza', 'Grilled Springer Mountain Farms Chicken Breast', 'Roasted Vegetables', 'Roasted Portobello Mushroom', 'White Oak Pastures Grass-fed Beef Patty', 'All-beef Hot Dog', 'Sweet Potato Fries', 'French Fries', 'Creamy Mashed Potatoes', 'House-made Potato Chips', 'Hard-boiled Egg (1 Each)', 'Tofu', 'Chicken Breast', 'Tuna'],
                    ['Cheese Pizza', 'Pepperoni Pizza', 'Vegetable Pizza', 'Grilled Springer Mountain Farms Chicken Breast', 'Roasted Vegetables', 'Roasted Portobello Mushroom', 'White Oak Pastures Grass-fed Beef Patty', 'All-beef Hot Dog', 'Sweet Potato Fries', 'French Fries', 'Creamy Mashed Potatoes', 'House-made Potato Chips', 'Hard-boiled Egg (1 Each)', 'Tofu', 'Chicken Breast', 'Tuna']],
      generalMenuScore: [[],[],[]]
    }
  }

  render() {
  	return (
  		<div className="coloredHeaderContentInnerContainer">
        {this.renderMenu(this.props, 0)}
        {this.renderMenu(this.props, 1)}
        {this.renderMenu(this.props, 2)}
      </div>
  	);
  }

  renderMenu(props, index) {
    let menuItems = [];
    const relevantMenu = this.state.generalMenu[index].slice();
    for (let i = 0; i < relevantMenu.length; i++) {
      menuItems.push(this.renderMenuItem(props, relevantMenu[i], index, i));
    }
    return (
      <DailyMenu
        isActive={this.state.mealStatuses[index]}
        onClick={() => this.handleMenuClick(this.state.meals[index])}
        meal={this.state.meals[index]}
        menuItems={menuItems}
      />
    );
  }

  renderMenuItem(props, item, menu_index, item_index) {
    var score;
    const numbers = ["one", "two", "three", "four", "five"];
    if (this.state.generalMenuScore[menu_index].length !== this.state.generalMenu[menu_index].length) {
      score = Math.trunc(Math.random() * 5);
      this.state.generalMenuScore[menu_index].push(score);
    } else {
      score = this.state.generalMenuScore[menu_index][item_index];
    }
    var classes = "standardText menuItemText " + numbers[score];
    return (
      <div className={classes}><p>{item}</p></div>
    );
  }

  handleMenuClick(meal) {
    const meals = this.state.meals.slice();
    const index = meals.indexOf(meal);
    const mealStatuses = [false, false, false]
    mealStatuses[index] = !this.state.mealStatuses[index];
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
        {props.menuItems}
      </div>
      <div className="standardDividerNoMargin"></div>
    </div>
  );
}

export default dailyMenus;