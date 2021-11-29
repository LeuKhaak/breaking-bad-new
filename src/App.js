import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/pages/Main/index";
import Catalog from "./components/pages/Catalog/index";
import Persona from "./components/pages/Persona/index";

function App() {
  return (
    <Router>
      <Route path="/" component={Main} exact={true} />
      <Route path="/person" component={Persona} />
      <Route path="/catalog/" component={Catalog} />
    </Router>
  );
}

export default App;
