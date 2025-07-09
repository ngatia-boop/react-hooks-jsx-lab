import React from "react";
import { username, city } from "../data/data";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={{ color: "firebrick"}}>
      {username} is a Web Developer from {city}
    </h1>
    <style>firebrick</style>
  </div>;
}

export default Home;
