import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import SiparisFormu from "./SiparişFormu";
import siparisOnay from "./SiparişOnay";
const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/siparisFormu" component={SiparisFormu} />
      <Route path="/siparişOnay" component={siparisOnay}/>
    </Switch>
  </Router>
  );
};
export default App;
