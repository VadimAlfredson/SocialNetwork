import React from "react";
import store from "./Redux/reduxStore";

const StoreContext = React.createContext(store)

export default StoreContext