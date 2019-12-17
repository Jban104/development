import React, { Component } from "react";
import './App.css';
import FilteredList from "./FilteredList";
import amc from "./images/amc.jpg";
import ares from "./images/ares.jpg";
import artemis from "./images/artemis.jpg";
import bacchus from "./images/bacchus.jpg";
import bellona from "./images/bellona.jpg";
import chaac from "./images/chaac.jpg";
import discordia from "./images/discordia.jpg";
import geb from "./images/geb.jpg";
import gy from "./images/guanyu.jpg";
import hy from "./images/houyi.jpg";
import hb from "./images/hunbatz.jpg";
import janus from "./images/janus.jpg";
import kali from "./images/kali.jpg";
import kuku from "./images/kukulkan.jpg";
import set from "./images/set.jpg";

/*
 * List of all of the gods that will be displayed with their name, class, type, worshipers, and image
 */
const godsList = [
  { name: "Ah Muzen Cab", class: "Hunter", type: "Physical", worshippers: 65, image: amc },
  { name: "Ares", class: "Guardian", type: "Magical", worshippers: 145, image: ares },
  { name: "Artemis", class: "Hunter", type: "Physical", worshippers: 1000, image: artemis },
  { name: "Bacchus", class: "Guardian", type: "Magical", worshippers: 786, image: bacchus },
  { name: "Bellona", class: "Warrior", type: "Physical", worshippers: 34, image: bellona },
  { name: "Chaac", class: "Warrior", type: "Physical", worshippers: 109, image: chaac },
  { name: "Discordia", class: "Mage", type: "Magical", worshippers: 453, image: discordia },
  { name: "Geb", class: "Guardian", type: "Magical", worshippers: 0, image: geb },
  { name: "Guan Yu", class: "Warrior", type: "Physical", worshippers: 590, image: gy },
  { name: "Hou Yi", class: "Hunter", type: "Physical", worshippers: 187, image: hy },
  { name: "Hun Batz", class: "Assassin", type: "Physical", worshippers: 1430, image: hb },
  { name: "Janus", class: "Mage", type: "Magical", worshippers: 765, image: janus },
  { name: "Kali", class: "Assassin", type: "Physical", worshippers: 854, image: kali },
  { name: "Kukulkan", class: "Mage", type: "Magical", worshippers: 234, image: kuku },
  { name: "Set", class: "Assassin", type: "Physical", worshippers: 134, image: set }
];

class App extends Component {
  /*
   * Includes a header with text and the FilteredList (which includes the list of
   * the gods, dropdowns, and search)
   */
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 class="title">See Some of the Gods in Smite!</h1>
          <h3 class="subtitle">Search through some of the gods by classes, type, and how many worshippers you have!</h3>
        </div>
        <div className="list">
          <FilteredList items={godsList} />
        </div>
      </div>
    );
  }
}

export default App;
