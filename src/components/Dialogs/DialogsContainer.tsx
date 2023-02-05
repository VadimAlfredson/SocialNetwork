import React from "react";
import Dialogs from "./Dialogs";
import {compose} from "redux";
import {withAuthNavigate} from "../hoc/witAuthNavigate";


export default compose(
    withAuthNavigate
)(Dialogs)