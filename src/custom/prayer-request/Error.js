import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return null;
  }
  if (message) {
    return <span className="has-error">{message}</span>;
  }
  return null;
};

export default Error;
