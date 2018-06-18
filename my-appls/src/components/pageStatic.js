import React from 'react';
import DailyMenus from './dailyMenus';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfast_general: ['Scrambled Tofu', 'Scrambled Eggs', 'Bacon', 'Turkey Bacon', 'Chicken Sausage', 'Pork Sausage', 'Turkey Sausage', 'Vegan Sausage Link', 'Biscuit', 'Hash Browns', 'Breakfast Potatoes', 'Tater Tots', 'Buttermilk Pancakes', 'Texas French Toast', 'Low Fat Fruit Yogurt', 'Lowfat Vanilla Yogurt', 'Plain Greek Yogurt', 'Cottage Cheese', 'Belgian Waffle', 'Pancake Syrup'],
      lunch_general: ['Cheese Pizza', 'Pepperoni Pizza', 'Vegetable Pizza', 'Grilled Springer Mountain Farms Chicken Breast', 'Roasted Vegetables', 'Roasted Portobello Mushroom', 'White Oak Pastures Grass-fed Beef Patty', 'All-beef Hot Dog', 'Sweet Potato Fries', 'French Fries', 'Creamy Mashed Potatoes', 'House-made Potato Chips', 'Hard-boiled Egg (1 Each)', 'Tofu', 'Chicken Breast', 'Tuna'],
      dinner_general: ['Cheese Pizza', 'Pepperoni Pizza', 'Vegetable Pizza', 'Grilled Springer Mountain Farms Chicken Breast', 'Roasted Vegetables', 'Roasted Portobello Mushroom', 'White Oak Pastures Grass-fed Beef Patty', 'All-beef Hot Dog', 'Sweet Potato Fries', 'French Fries', 'Creamy Mashed Potatoes', 'House-made Potato Chips', 'Hard-boiled Egg (1 Each)', 'Tofu', 'Chicken Breast', 'Tuna']
    };
  }

  // renderMenu(navBarState) {
  //   let navBar = [];
  //   for (var i = 0; i < navBarState.links.length; i++) {
  //     const isActive = (i === navBarState.activeLinkId);
  //     // return this.renderMenuItem(linkName, isActive);
  //     navBar.push(this.renderMenuItem(i, isActive));
  //   }
  //   return(navBar);
  // }

  // renderMenuItem(linkId, linkName, isActive) {
  //   return(
  //     <NavBarLink
  //       key={linkId}
  //       linkName={linkName}
  //       isActive={isActive}
  //       onClick={() => this.handleClick(linkId)}
  //     />
  //   );
  // }

  handleMenuClick(meal) {

  }

  render() {
    return(
      <div className="staticGeneralContainer">
        {/*<div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Daily Score</a>
          <div className="coloredHeaderContentInnerContainer">
            <p className="standardText standardTextPaddingHorizontal scoreText">Breakfast:</p>
            <div className="standardDividerNoMargin"></div>
            <p className="standardText standardTextPaddingHorizontal scoreText">Lunch:</p>
            <div className="standardDividerNoMargin"></div>
            <p className="standardText standardTextPaddingHorizontal scoreText">Dinner:</p>
          </div>
        </div>*/}
        <div className="coloredHeaderContentContainer">
          <a className="coloredHeader standardText">Current Menu</a>
          <DailyMenus
            onClick={(meal) => this.handleMenuClick()}
          />
        </div>
      </div>
    );
  };
}

export default StaticPage;