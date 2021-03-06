import React from "react";

import { UpdateUser } from "../UpdateUser/UpdateUser";

import "./ErrorPage.scss";

export const ErrorPage = ({ onUpdateUserClick }) => {
    return (
        <div className="error-page">
            <p>Ooops! Something went wrong</p>
            <p>Try to update:</p>
            <UpdateUser onUpdateUserClick={onUpdateUserClick} />
        </div>
    );
};
