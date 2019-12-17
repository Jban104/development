import React, {Component} from 'react';
import "./index.css";
import { Dropdown, DropdownButton, ButtonToolbar } from "react-bootstrap";

class List extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      shown: true
    };
  }

  /*
   * First checks to see if the list given is empty. If it is, display text saying that
   * the filters/search resulted in an empty list. If this is not the case, check to see
   * if shown in the state is true or false. If it is true, display the list with the images
   * and all of the information of the god (name, type, class, and worshipers). If it is
   * false, just display the image.
   */
  renderList() {
    if(this.props.items.length <= 0) {
      return <div className="nothing">There are no gods<br/>with the given filters/search!</div>
    }

    if(this.state.shown) {
      const items = this.props.items.map(item => {
        return <li key={item.name}><img src={item.image} /><br/>{item.name}<br/>{item.class}<br/>Type: {item.type}<br/>{item.worshippers} Worshipers</li>
      });

      return items;
    } else {
      const items = this.props.items.map(item => {
        return <li key={item.name}><img src={item.image} /></li>
      });

      return items;
    }
  }

  /*
   * This function gets called everytime the "Show Information" filter is selected in the Information dropdown,
   * handling the state changes that should occur when it is selected (show all information under the images)
   */
  onSelectShow = () => {
    this.setState({shown: true });
  }

  /*
   * This function gets called everytime the "Hide Information" filter is selected in the Information dropdown,
   * handling the state changes that should occur when it is selected (hide all information under the images)
   */
  onSelectHide = () => {
    this.setState({shown: false });
  }

  /*
   * Includes a dropdown that is used to hide the information under all of the images of the gods and
   * the actual list of the gods (based on all of the filters, sorts, search query, and hidden info)
   * with their images and possibly information under the images (if the information was not hidden
   * by the user)
   */
  render() {
    return (
      <div className="list">
        <ButtonToolbar className="dropdown-hide">
          <DropdownButton title="Information" id="dropdown-basic-button-4" size="lg" className="dropdown4">
            <Dropdown.Item eventKey="Show-Information" onSelect={this.onSelectShow}>
              Show Information
            </Dropdown.Item>
            <Dropdown.Item eventKey="Hide-Information" onSelect={this.onSelectHide}>
              Hide Information
            </Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
        <div className="gods">
          <ul class="list">
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}

export default List; 
