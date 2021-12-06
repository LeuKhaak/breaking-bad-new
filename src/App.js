import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Catalog from "./components/pages/Catalog";
import Persona from "./components/pages/Persona";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <>
            <Route path="/" component={Main} exact={true} />
            <Route path="/person" component={Persona} />
            <Route path="/catalog/" component={Catalog} />
          </>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
