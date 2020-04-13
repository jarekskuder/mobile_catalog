import React, {Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import routes from "./RouteList";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routes.map((route, id) => {
                    return route.component ? (
                        route.private ? (
                            <PrivateRoute
                                key={id}
                                path={route.path}
                                exact={route.exact}
                                component={(props) => (
                                    <route.component {...props} name={route.name} />
                                )}
                            />
                        ) : (
                            <Route
                                key={id}
                                path={route.path}
                                exact={route.exact}
                                render={(props) => (
                                    <route.component {...props} name={route.name} />
                                )}
                            /> )
                    ) : null;
                })}
                <Redirect exact from={"/"} to={"/brands"} />
            </Switch>
        </Suspense>
    );
};

export default Routes;
