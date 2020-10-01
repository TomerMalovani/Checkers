/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import BoardContainer from "../boardContainer/";

function App() {
  return <BoardContainer />;
}

App.propTypes = {};

const withConnect = connect();

export default compose(withConnect)(App);
