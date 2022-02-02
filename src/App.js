import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./layout/form/Form";
import EditForm from "./layout/edit-form/EditForm";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={Form} />
        <Route exact path="/editUser/:id" component={EditForm} />
      </Switch>
    </div>
  );
}

export default App;
