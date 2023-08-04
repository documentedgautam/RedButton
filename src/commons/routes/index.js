import React from "react";
import { Route } from "react-router-dom";

import Login from "../../containers/login";

export const routes = [
    <Route path="/"
    strict
    element={
        <Login />
    }
    />
];