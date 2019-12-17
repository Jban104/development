import React, {Component} from 'react';
import "./index.css";
import List from "./List";
import { Col, Row, Dropdown, DropdownButton, ButtonToolbar } from "react-bootstrap";

class Random extends Component {
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

  search = item => {
    return item.name.toLowerCase().search(this.state.search) !== -1;
  }

  render() {
    return (
      <div className="list">
        <List items={this.props.items.filter(this.filterTypeAndClass)} />
      </div>
    );
  }
}

export default List; 
