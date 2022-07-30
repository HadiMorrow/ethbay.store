// import { Navigate } from "react-router-dom";
import React, { Navigate }  from "react";

export const SignInWrapper = ({ children, currentAccount, adminAddress }) => {
    console.log(currentAccount == adminAddress)
    return currentAccount == adminAddress ? children: <Navigate to="/" replace /> ;
};
