import React, {Component} from 'react';
import "./index.css";
import List from "./List";

class Search extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: ""
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
      this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list (checking if the input to search is equal to the name of each god in the list).
   */
  search = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1;
  }

  /*
   * Includes the search bar used for searching through the list based on names, and the
   * List component (which is passed the list with the current filters/sort and the search query)
   */
  render() {
    return (
      <div className="search-list">
        <input type="text" placeholder="Search Via Name" onChange={this.onSearch} className="searchbar" />
        <List items={this.props.items.filter(this.search)} />
      </div>
    );
  }
}

export default Search; 
