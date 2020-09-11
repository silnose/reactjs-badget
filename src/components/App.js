import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew.js";
import Badges from "../pages/Badges.js";
import Layout from "./Layout.js";
import NotFound from "./NotFound.js";
import BadgeEdit from "../pages/BadgeEdit.js";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Badges} />
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
