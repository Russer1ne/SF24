import React from "react";

import AboutHero from "./AboutHero";
import AboutContacts from "./AboutContacts";
import AboutTeam from "./AboutTeam";

class App extends React.Component {
  render() {
    return (
      <>
        <AboutHero />
        <AboutContacts />
        <AboutTeam />
      </>
    )
  }
}

export default App;