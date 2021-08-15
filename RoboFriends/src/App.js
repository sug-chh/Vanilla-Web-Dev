import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import Scroll from "./Scroll";

function App() {
  const [searchValue, searchItem] = React.useState("");

  function onSeachChange(event) {
    console.log(event.target.value);
    searchItem(event.target.value);
  }
  const filterRobots = robots.filter(function (robot) {
    return robot.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  console.log(filterRobots);
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSeachChange} />

      <Scroll>
        <CardList robots={filterRobots} />
      </Scroll>
    </div>
  );
}
export default App;
