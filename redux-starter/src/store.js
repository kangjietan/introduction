import redux from "redux";
import reducer from "./reducer.js";

const { createStore } = redux;

const store = createStore(reducer);

export default store;
