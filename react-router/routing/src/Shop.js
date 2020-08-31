import React, { useState } from "react";

import { Redirect } from "react-router";

import { useHistory } from "react-router-dom";

import "./App.css";

function Shop() {
  const [redirect, setRedirect] = useState(false);

  const history = useHistory();
  if (redirect) {
    return <Redirect to="/about" />;
  }

  return (
    <div>
      <h1>Shop Page</h1>
      <button onClick={() => setRedirect(true)}>Redirect to About</button>
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        Test useHistory
      </button>
    </div>
  );
}

export default Shop;
