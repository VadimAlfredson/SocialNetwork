
import {Dispatch} from "react";
import {AuthReducersType} from "./auth_reducers";

export type ActionType = AuthReducersType

export type DispatchType = Dispatch<ActionType>