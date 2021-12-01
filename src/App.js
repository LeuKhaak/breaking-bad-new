import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Catalog from "./components/pages/Catalog";
import Persona from "./components/pages/Persona";
import Header from "./components/molecules/Header";
//import Footer from "./components/molecules/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <div>
            <Route path="/" component={Main} exact={true} />
            <Route path="/person" component={Persona} />
            <Route path="/catalog/" component={Catalog} />
          </div>
        </Switch>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
