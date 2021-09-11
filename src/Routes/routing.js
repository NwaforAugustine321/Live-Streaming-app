import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { PageWrapper } from "../component";

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute
            name={publicRoutes.About.name}
            path={publicRoutes.About.path}
            component={publicRoutes.About.component}
          />
          
          <PublicRoute
            name={publicRoutes.Catalog.name}
            path={publicRoutes.Catalog.path}
            component={publicRoutes.Catalog.component}
          />

          <PublicRoute
            name={publicRoutes.Home.name}
            path={publicRoutes.Home.path}
            component={publicRoutes.Home.component}
            {...this.props}
          />
           <Route
            path={publicRoutes.noMatch.path}
            component={publicRoutes.noMatch.component}
          />
        </Switch>
      </Router>
    );
  }
}

const PublicRoute = ({ component: Component, ...rest }) => {
  debugger;
  return (
    <Route
      {...rest}
      render={(props) => (
        <PageWrapper>
          <Component {...props} />
        </PageWrapper>
      )}
    />
  );
};

export default Routing;
