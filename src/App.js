import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Catalog from "./components/pages/Catalog";
import Persona from "./components/pages/Persona";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
