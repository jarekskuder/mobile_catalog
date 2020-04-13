import React from "react";

const Brands = React.lazy(() => import("../views/Brands"));
const Phones = React.lazy(() => import("../views/Phones"));
const Login = React.lazy(() => import("../views/Login"));

const routes = [
    {name: 'Brands', exact: true, path: '/brands', component: Brands},
    {name: 'Phones', exact: true, path: '/phones/:id', private: true, component: Phones},
    {name: 'Login', exact: true, path: '/login', component: Login},
];

export default routes;
