import React, { Component } from "react";
import { DropdownButton, Dropdown, ButtonToolbar } from "react-bootstrap";
import Search from "./Search";
import "./index.css";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      class: "All",
      type: "All",
      sort: "None",
      list: this.props.items
    };
  }

  /*
   * This function gets called every time a new filter type is selected in the
   * Class dropdown, handling the state changes that should occur when a new
   * filter type is selected. 
   */
  onSelectFilterClass = event => {
    this.setState({ class: event });
  };

  /*
   * This function gets called every time a new filter type is selected in the
   * Type dropdown, handling the state changes that should occur when a new
   * filter type is selected. 
   */
  onSelectFilterType = event => {
    this.setState({ type: event });
  };

  /*
   * This function is used to compare to strings to help aid in sorting the list alphabetically
   */
  compareStrings = (a, b) => {
    if(a.name < b.name) {
      return -1
    }
    if(b.name < a.name) {
      return 1
    }
    return 0;
  }

  /*
   * This function gets called everytime the "None" filter is selected in the Sort dropdown,
   * handling the state changes that should occur when it is selected (order the list
   * alphabetically)
   */
  sortByNone = () => {
    this.setState({ list: this.state.list.sort(this.compareStrings),
                    sort: "None" });
  }

  /*
   * This function gets called everytime the "Worshipers" filter is selected in the Sort dropdown,
   * handling the state changes that should occur when it is selected (order the list by
   * worshipers (descending order))
   */
  sortByWorshippers = () => {
    this.setState({ list: this.state.list.sort((a, b) => (b.worshippers - a.worshippers)),
                    sort: "Worshipers" });
  }

  /*
   * This function should determine whether the item being passed in's class matches the type
   * that we are filtering on.
   * Input: An element from the list
   * Output: true or false
   */
  matchesFilterClass = item => {
    if(this.state.class === "All" || item.class === this.state.class) {
      return true;
    } else {
      return false;
    }
  }

  /*
   * This function should determine whether the item being passed in's type matches the type
   * that we are filtering on.
   * Input: An element from the list
   * Output: true or false
   */
  matchesFilterType = item => {
    if(this.state.type === "All" || item.type === this.state.type) {
      return true;
    } else {
      return false;
    }
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this function returns true for a given element, filter() will add that element to its
   * return list (checking if type and class of each god in the list matches the current filters).
   */
  filterTypeAndClass = item => {
    return this.matchesFilterType(item) && this.matchesFilterClass(item);
  }

  /*
   * Includes the three dropdowns used for filtering and sorting, three 'blocks' displaying what
   * the current filter/sort is, and the Search component (which is passed the list with the
   * current filters/sort)
   */
  render() {
    return (
      <div className="filter-list">
        <ButtonToolbar className="buttons">
          <DropdownButton title="Class" id="dropdown-basic-button-1" size="lg" className="dropdown1">
            <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterClass}>
              All
            </Dropdown.Item>
            <Dropdown.Item eventKey="Assassin" onSelect={this.onSelectFilterClass}>
              Assassin
            </Dropdown.Item>
            <Dropdown.Item eventKey="Guardian" onSelect={this.onSelectFilterClass}>
              Guardian
            </Dropdown.Item>
            <Dropdown.Item eventKey="Hunter" onSelect={this.onSelectFilterClass}>
              Hunter
            </Dropdown.Item>
            <Dropdown.Item eventKey="Mage" onSelect={this.onSelectFilterClass}>
              Mage
            </Dropdown.Item>
            <Dropdown.Item eventKey="Warrior" onSelect={this.onSelectFilterClass}>
              Warrior
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="Type" id="dropdown-basic-button-2" size="lg" className="dropdown2">
            <Dropdown.Item eventKey="All" onSelect={this.onSelectFilterType}>
              All
            </Dropdown.Item>
            <Dropdown.Item eventKey="Magical" onSelect={this.onSelectFilterType}>
              Magical
            </Dropdown.Item>
            <Dropdown.Item eventKey="Physical" onSelect={this.onSelectFilterType}>
              Physical
            </Dropdown.Item>
          </DropdownButton>
          <DropdownButton title="Sort" id="dropdown-basic-button-3" size="lg" className="dropdown3">
            <Dropdown.Item eventKey="none" onSelect={this.sortByNone}>
              None
            </Dropdown.Item>
            <Dropdown.Item eventKey="Worshippers" onSelect={this.sortByWorshippers}>
              Worshipers
            </Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
        <div className="filter-names">
          <div className="class-filter">
            Class Selected: {this.state.class} 
          </div>
          <div className="type-filter">
            Type Selected: {this.state.type}
          </div>
          <div className="sort-filter">
            Sorting Method: {this.state.sort}
          </div>
        </div>
        <Search items={this.props.items.filter(this.filterTypeAndClass)} />
      </div>
    );
  }
}

export default FilteredList;
