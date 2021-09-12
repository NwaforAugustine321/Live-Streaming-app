import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            name={publicRoutes.Category.name}
            path={publicRoutes.Category.path}
            component={publicRoutes.Category.component}
          />

          <PublicRoute
            name={publicRoutes.Contact.name}
            path={publicRoutes.Contact.path}
            component={publicRoutes.Contact.component}
          />

          <PublicRoute
            name={publicRoutes.Detail.name}
            path={publicRoutes.Detail.path}
            component={publicRoutes.Detail.component}
          />

          <PublicRoute
            name={publicRoutes.Interview.name}
            path={publicRoutes.Interview.path}
            component={publicRoutes.Interview.component}
          />
          <PublicRoute
            name={publicRoutes.Pricing.name}
            path={publicRoutes.Pricing.path}
            component={publicRoutes.Pricing.component}
          />
          <PublicRoute
            name={publicRoutes.Privacy.name}
            path={publicRoutes.Privacy.path}
            component={publicRoutes.Privacy.component}
          />
          <Route
            name={publicRoutes.Signup.name}
            path={publicRoutes.Signup.path}
            component={publicRoutes.Signup.component}
          />
          <Route
            name={publicRoutes.Signin.name}
            path={publicRoutes.Signin.path}
            component={publicRoutes.Signin.component}
          />
          <PublicRoute
            name={publicRoutes.Live.name}
            path={publicRoutes.Live.path}
            component={publicRoutes.Live.component}
          />

          <Route
            name={publicRoutes.ForgotPassword.name}
            path={publicRoutes.ForgotPassword.path}
            component={publicRoutes.ForgotPassword.component}
          />

          <PublicRoute
            name={publicRoutes.Catalog.name}
            path={publicRoutes.Catalog.path}
            component={publicRoutes.Catalog.component}
          />

          <PublicRoute
            exact
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
